import { useContext } from "react";
import { useScroll } from "../../Hooks/useScroll";
import HeaderDropdown from "../../Sub_Components/Header_Components/Header_DropDown/HeaderDropdown";
// import SearchBar from "../../Sub_Components/Header_Components/SearchBar/SearchBar";
import { IoSearchSharp, IoCart, IoPersonSharp } from "react-icons/io5";
// react router
import { Link } from "react-router-dom";
// Context
import { FocusContext } from "../../Contexts/FocusProvider";
import { CartContext } from "../../Contexts/CartProvider";

export default function Header() {
  const scrollState = useScroll(100);
  const { setIsFocused } = useContext(FocusContext);
  const { cartItems } = useContext(CartContext);
  return (
    <header
      className={` sticky top-0 z-10  ${
        scrollState ? "header-black" : "header-glassy"
      }`}
    >
      <div className="container m-auto flex items-center relative py-2">
        <div className="mr-auto">
          <Link to="/" className="logo text-main">
            X-Beat
          </Link>
        </div>
        <div className="flex gap-8 md:gap-12 py-2">
          <button onClick={() => setIsFocused("search")}>
            <IoSearchSharp className="text-main text-[18px] md:text-[24px]" />
          </button>
          <Link to={"/cart"} className="relative">
            <IoCart className="text-main text-[18px] md:text-[24px]" />
            {cartItems.length > 0 && (
              <div className="cart-badge ">
                <p>{cartItems.length}</p>
              </div>
            )}
          </Link>
          <div className="menu cursor-pointer">
            <IoPersonSharp className="text-main text-[18px] md:text-[24px]" />
            <HeaderDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}
