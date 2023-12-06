import Seo from "../../Components/Seo/Seo";
import Carousel from "../../Components/Sub_Components/Main_Components/Carousel/Carousel";
import TopProducts from "../../Components/Sub_Components/Main_Components/Top_Products/TopProducts";

export default function Home() {
  return (
    <div className="home">
      <Seo currentPage={"Find the best deals"} />
      <Carousel />
      <TopProducts />
    </div>
  );
}
