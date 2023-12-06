import { useContext } from "react";
import { ProductsContext } from "../../../Contexts/ProductsProvider";
import ProductCard from "../Product_Card/ProductCard";
// React Reveal
import { Fade } from "react-awesome-reveal";
// Icons
import { BiErrorCircle } from "react-icons/bi";

export default function FullProducts() {
  const { currentData } = useContext(ProductsContext);

  return (
    <div className=" w-full md:w-4/6 xl:w-5/6 w-max m-auto ">
      {currentData.length > 0 ? (
        <div className="gap-3 grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {currentData.map(
            (
              item // Added curly braces for map function
            ) => (
              <Fade
                duration={500}
                key={item.id}
                delay={item.id * 10}
                triggerOnce={true}
                direction="top"
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
            )
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-2">
          <BiErrorCircle className="text-[red] large-icon" />
          <h5 className="text-main text-center">No Results Found</h5>
        </div>
      )}
    </div>
  );
}
