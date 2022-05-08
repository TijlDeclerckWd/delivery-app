import { useRef } from 'react';

export const useDebounce = (fnct, time = 300) => {
  const timeout = useRef<any>(null);

  const trigger = (args) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => fnct(args), time);
  };

  return { trigger };
};
