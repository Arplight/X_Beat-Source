// Icons
import { IoIosArrowUp } from "react-icons/io";
// Hooks
import { useScroll } from "../../Hooks/useScroll";

export default function TopButton() {
  const scrollState = useScroll(700);
  function elevator() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div>
      <button
        onClick={elevator}
        className={`top-button ${scrollState ? "show-btn" : ""}`}
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
}
