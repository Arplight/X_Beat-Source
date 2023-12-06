// Hooks
import ProductGallery from "./Summary_Components/ProductGallery";
import ProductInfo from "./Summary_Components/ProductInfo";

export default function ProductSummary() {
  return (
    <div className="flex flex-col lg:flex-row product-summary items-center h-max gap-6">
      <ProductGallery />
      <ProductInfo />
    </div>
  );
}
