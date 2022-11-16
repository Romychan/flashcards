import { useRef, useEffect, useState } from 'react';

export const useSpeechSynthesis = () => {
  const synth = useRef() as React.MutableRefObject<SpeechSynthesis>;
  const [isPlaying, setIsPlaying] = useState(false);

  const cancel = () => {
    synth.current.cancel();
    setIsPlaying(false);
  };

  const speak = (text: string, language: string, pitch = 1, rate = 1) => {
    if (synth.current.speaking) {
      synth.current.cancel();
    }

    setIsPlaying(true);

    const utterance = new SpeechSynthesisUtterance(text);
    const voiceIndex = synth.current
      .getVoices()
      .findIndex((voice) => voice.lang.split('-')[0] === language);

    utterance.voice = synth.current.getVoices()[voiceIndex];
    utterance.pitch = pitch;
    utterance.rate = rate;

    synth.current.speak(utterance);
    utterance.onend = () => {
      setIsPlaying(false);
    };
  };

  useEffect(() => {
    if (typeof window !== 'object' || !window.speechSynthesis) return;
    synth.current = window.speechSynthesis;

    return () => {
      if (synth.current.speaking) {
        synth.current.cancel();
      }
    };
  }, []);

  return { speak, cancel, isPlaying };
};
