import { useState } from "react";
export default function useActive(defaultValue) {
  const [active, setActive] = useState(defaultValue);
  function activeHandler(e) {
    let currentActive = e.target.getAttribute("data-active");
    setActive(currentActive);
  }
  return [active, activeHandler, setActive];
}
