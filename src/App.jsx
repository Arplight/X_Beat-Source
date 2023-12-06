// React Router
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Layout
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Main from "./Components/Layout/Main/Main";
import Services from "./Components/Layout/Services/Services";
import TopButton from "./Components/Layout/Top_Button/TopButton";
import Slider from "./Components/Layout/Slider/Slider";
import Blocker from "./Components/Layout/Blocker/Blocker";

// Pages
import AllProducts from "./Pages/All_Products/AllProducts";
import Cart from "./Pages/Cart/Cart";
import ErrorPage from "./Pages/Error_Page/ErrorPage";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/Product_Details/ProductDetails";
// Template
// import Template from "./Template";

// Main Style Sheet
import "./Styles/Main.scss";
import TopScroll from "./Components/Top_Scroll/TopScroll";
function App() {
  const location = useLocation().pathname.slice(1);
  return (
    <div
      className={`grid ${
        location === ""
          ? "grid-rows-[auto,calc(100vh-55px),1fr,auto,auto]"
          : "grid-rows-[auto,1fr,auto,auto]"
      } auto-cols-fr`}
    >
      {/* TopScroll */}
      {/* <TopScroll /> */}
      {/* LayOut */}
      <Blocker />
      <Header />
      {location === "" ? <Slider /> : null}
      {/* Pages */}
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Services />
      <TopButton />
      <Footer />
      {/* Template */}
      {/* <Template /> */}
    </div>
  );
}
export default App;
