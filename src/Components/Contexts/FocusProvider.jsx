import { createContext, useEffect, useState } from "react";

export const FocusContext = createContext();
export default function FocusProvider(Props) {
  const [isFocused, setIsFocused] = useState(null);

  useEffect(() => {
    const body = document.querySelector("body");
    const blocker = document.querySelector(".blocker");
    if (isFocused !== null) {
      body.classList.add("is-focused");
      blocker.classList.remove("blocker-hidden");
    } else {
      body.classList.remove("is-focused");
      blocker.classList.add("blocker-hidden");
    }
  }, [isFocused]);
  return (
    <FocusContext.Provider value={{ setIsFocused, isFocused }}>
      {Props.children}
    </FocusContext.Provider>
  );
}
