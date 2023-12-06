import PropTypes from "prop-types";
// Hoooks
import { useContext, useState } from "react";
// Contexts
import { CartContext } from "../../../Contexts/CartProvider";
// React Toastify
import { toast } from "react-toastify";

export default function AddButton({
  isInCart,
  isFullButton,
  productId,
  productTitle,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const { addCartItem } = useContext(CartContext);

  function handleCard() {
    addCartItem(productId);
    setIsAdded(true);
    toast.success(`Added ${productTitle} to cart`, {
      position: "top-center",
      autoClose: 2200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  }
  return (
    <button
      className={` ${isFullButton ? "full-button" : "single-button"} ${
        isAdded ? "cart-added" : ""
      } ${isInCart ? "button-disabled" : ""}`}
      onClick={handleCard}
      disabled={isInCart}
    >
      {isAdded ? "Added To Cart" : "Add To Cart"}
    </button>
  );
}
AddButton.propTypes = {
  isInCart: PropTypes.bool,
  isFullButton: PropTypes.bool,
  productId: PropTypes.number,
  productTitle: PropTypes.string,
};
