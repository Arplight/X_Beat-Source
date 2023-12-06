// Icons
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import PropTypes from "prop-types";

export default function QuantityButton({ currentQuantity, quantitySetter }) {
  return (
    <div className="quantity-button">
      <button
        disabled={currentQuantity === 1}
        onClick={() => {
          quantitySetter(currentQuantity - 1);
        }}
        className={`${currentQuantity === 1 ? "quantity-disabled" : ""}`}
      >
        <FaMinus />
      </button>
      <span>{currentQuantity}</span>
      <button
        disabled={currentQuantity === 5}
        onClick={() => {
          quantitySetter(currentQuantity + 1);
        }}
        className={`${currentQuantity === 5 ? "quantity-disabled" : ""}`}
      >
        <FaPlus />
      </button>
    </div>
  );
}
QuantityButton.propTypes = {
  currentQuantity: PropTypes.number,
  quantitySetter: PropTypes.func,
};
