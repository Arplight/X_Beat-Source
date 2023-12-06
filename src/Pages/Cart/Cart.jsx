import { useContext } from "react";
import CartList from "../../Components/Sub_Components/Cart_Components/Cart_List/CartList";
import CartSummary from "../../Components/Sub_Components/Cart_Components/Cart_Summary/CartSummary";
import { CartContext } from "../../Components/Contexts/CartProvider";
import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";
import Seo from "../../Components/Seo/Seo";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart flex flex-col lg:flex-row gap-8 items-center">
      <Seo currentPage={"Cart"} />
      {cartItems.length === 0 ? (
        <div className="w-full flex flex-col items-center  gap-8">
          <BsCartX className="large-icon text-[red]" />
          <h2 className="text-main m-0">Your Cart is Empty</h2>
          <Link to="/all-products" className="single-button">
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          <CartList />
          <CartSummary />
        </>
      )}
    </div>
  );
}
