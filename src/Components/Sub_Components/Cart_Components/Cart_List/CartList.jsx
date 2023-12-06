import { useContext } from "react";
import CartItem from "./Cart_Item/CartItem";
import { CartContext } from "../../../Contexts/CartProvider";

export default function CartList() {
  const { cartItems } = useContext(CartContext);

  return (
    <ul className="cart-list w-full lg:w-3/5 overflow-y-scroll max-h-[380px] bg-[#161819] px-4 sm:px-8 ">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          itemId={item.id}
          itemImage={item.images[0]}
          itemInfo={item.info}
          itemBrand={item.brand}
          itemOriginalPrice={item.originalPrice}
          itemFinalPrice={item.finalPrice}
          itemTitle={item.title}
        />
      ))}
    </ul>
  );
}
