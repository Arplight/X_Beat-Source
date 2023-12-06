import ProductSummary from "../../Components/Sub_Components/Main_Components/Product_Summary/ProductSummary";
import ProductTabs from "../../Components/Sub_Components/Main_Components/Product_Tabs/ProductTabs";
import CurrentItemProvider from "../../Components/Contexts/CurrentItemProvider";
import RelatedProducts from "../../Components/Sub_Components/Main_Components/Related_Products/RelatedProducts";
import Seo from "../../Components/Seo/Seo";

export default function ProductDetails() {
  return (
    <div className="product-details flex flex-col">
      <Seo currentPage={"Details"} />
      <CurrentItemProvider>
        <ProductSummary />
        <ProductTabs />
        <RelatedProducts />
      </CurrentItemProvider>
    </div>
  );
}
