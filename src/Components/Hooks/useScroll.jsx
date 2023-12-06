import { useEffect, useState } from "react";

export function useScroll(t) {
  const [scrollState, setScrollState] = useState(false);
  const targetValue = t;
  function scrollHandler() {
    let currentScrollValue = window.scrollY;
    if (currentScrollValue >= targetValue) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [targetValue]);
  return scrollState;
}
