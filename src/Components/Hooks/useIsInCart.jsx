import { useContext } from "react";
import { CartContext } from "../Contexts/CartProvider";

export function useIsInCart(productId) {
  const { cartItems } = useContext(CartContext);
  const isInCart = cartItems.some((n) => n.id === productId);
  return isInCart;
}
