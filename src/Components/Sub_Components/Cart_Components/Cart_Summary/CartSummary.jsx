import { useContext } from "react";
import { CartContext } from "../../../Contexts/CartProvider";

export default function CartSummary() {
  const { cartItems, summaryTotal } = useContext(CartContext);
  return (
    <div className="w-full lg:w-2/5 cart-summary">
      <div className=" py-6 border-b-[1px] border-[#ffffff30]">
        <h5 className="text-main mb-10">
          Order Summary ( {cartItems.length} items )
        </h5>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center">
            <p className="text-large text-main mr-auto">Original Price</p>
            <h6 className="text-main">
              ${summaryTotal.totalOriginalPrice.toLocaleString()}
            </h6>
          </li>
          <li className="flex items-center">
            <p className="text-large text-main mr-auto">Discount</p>
            <h6 className="text-[#008000]">
              - ${summaryTotal.totalDiscount.toLocaleString()}
            </h6>
          </li>
          <li className="flex items-center">
            <p className="text-large text-main  mr-auto">Delivery</p>
            <h6 className="text-[#008000]">Free</h6>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-10 py-6">
        <div className="flex items-center">
          <h5 className="text-main mr-auto">Total Price</h5>
          <h3 className="text-main">
            ${summaryTotal.totalFinalPrice.toLocaleString()}
          </h3>
        </div>
        <button className="full-button">Checkout</button>
      </div>
    </div>
  );
}
