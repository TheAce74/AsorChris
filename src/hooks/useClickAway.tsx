import { useEffect } from "react";

function useClickAway(
  ref: React.MutableRefObject<HTMLElement>,
  callback: () => void
) {
  useEffect(() => {
    const handleClickAway = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [ref, callback]);
}

export { useClickAway };
