import { useEffect, useMemo } from "react";

function useClickAway(
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: () => void,
  excludeClasses?: string[]
) {
  const memoizedExcludeClasses = useMemo(
    () => excludeClasses,
    [excludeClasses]
  );

  useEffect(() => {
    const handleClickAway = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        ref.current &&
        !ref.current.contains(target) &&
        !memoizedExcludeClasses?.includes(target.className) &&
        !memoizedExcludeClasses?.some((item) => target.closest(`.${item}`))
      ) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [ref, callback, memoizedExcludeClasses]);
}

export { useClickAway };
