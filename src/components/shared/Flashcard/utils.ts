export const resizeFontToFit = (chars: number) => {
  switch (true) {
    case chars > 36 && chars < 64:
      return '2rem';
    case chars > 63 && chars < 129:
      return '1.5rem';
  }
};
