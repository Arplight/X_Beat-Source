// Hooks
import { useState } from "react";
import useActive from "../../../Hooks/useActive";
// Data
import productsData from "../../../../data/productsData";
// Components
import ProductCard from "../Product_Card/ProductCard";
import TabButton from "../../Buttons/Tab_Button/TabButton";
// Icons
import { FaArrowRightLong } from "react-icons/fa6";
// React Router
import { Link } from "react-router-dom";
// React Reveal
import { Fade } from "react-awesome-reveal";

export default function TopProducts() {
  const [data, setData] = useState(productsData);
  const [active, activeHandler] = useActive("All");
  function categoryHandler(e) {
    let category = e.target.innerHTML;
    if (category === "All") {
      setData(productsData);
    } else {
      setData(productsData.filter((e) => e.category === category));
    }
  }
  return (
    <div className="top-products flex flex-col items-center">
      <h2 className="text-main text-center">Top Products</h2>
      <div className="flex m-auto mb-[80px] gap-4 md:gap-10 flex-wrap justify-center">
        {["All", "Headphones", "Earbuds", "Earphones", "Neckbands"].map((t) => (
          <TabButton
            key={t}
            tab={t}
            onClick={(e) => {
              categoryHandler(e);
              activeHandler(e);
            }}
            active={active}
          />
        ))}
      </div>
      <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.slice(0, 10).map((item) => (
          <Fade
            key={item.id}
            delay={item.id * 10}
            duration={500}
            triggerOnce={true}
          >
            <ProductCard
              cardId={item.id}
              cardImage={item.images[0]}
              cardInfo={item.info}
              cardTitle={item.title}
              cardPrice={item.originalPrice}
              cardFinalPrice={item.finalPrice}
              cardRate={[...Array(item.rateCount).keys()]}
            />
          </Fade>
        ))}
        <div className="empty-card text-main">
          <Link to={"/all-products"}>
            Browse All <br /> Products
            <FaArrowRightLong className="inline text-xl ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
