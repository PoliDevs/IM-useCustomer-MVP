import { useEffect } from 'react';
export const useOnClickOutside = (ref, handler, noRef) => {
  useEffect(() => {
    const listener = (event) => {
      const el = ref;
      const noEl = noRef?.current;
      if (
        !el ||
        el.contains(event.target) ||
        (noEl && noEl.contains(event.target))
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, noRef]);
};
