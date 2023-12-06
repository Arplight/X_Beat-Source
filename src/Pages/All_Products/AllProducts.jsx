import Seo from "../../Components/Seo/Seo";
import FullProducts from "../../Components/Sub_Components/Main_Components/Full_Products/FullProducts";
import ProductsBoard from "../../Components/Sub_Components/Main_Components/Products_Board/ProductsBoard";

export default function AllProducts() {
  return (
    <div className="flex gap-3 all-products">
      <Seo currentPage={"All-Products"} />
      <ProductsBoard />
      <FullProducts />
    </div>
  );
}
