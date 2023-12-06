import { createContext, useState } from "react";
import productsData from "../../data/productsData";

export const ProductsContext = createContext();
export default function ProductsProvider(Props) {
  const [currentData, setCurrentData] = useState(productsData);

  // Sorting
  function sortHandler(stateObject) {
    const { sortBy } = stateObject;
    let sortedData = [...productsData];
    switch (sortBy) {
      case "Latest":
        {
          setCurrentData(sortedData.slice(0, 6));
        }
        break;
      case "Featured":
        {
          setCurrentData(
            sortedData.filter((n) => n.tag === "featured-product")
          );
        }
        break;
      case "Top Rated":
        {
          setCurrentData(sortedData.filter((n) => n.rateCount === 5));
        }
        break;
      case "Price(Lowest First)":
        {
          setCurrentData(
            sortedData.slice().sort((a, b) => a.finalPrice - b.finalPrice)
          );
        }
        break;
      case "Price(Highest First)":
        {
          setCurrentData(
            sortedData.slice().sort((a, b) => b.finalPrice - a.finalPrice)
          );
        }
        break;

      default:
        {
          setCurrentData(sortedData);
        }
        break;
    }
  }
  // Filtering
  function brandsHandler(stateObject) {
    const { brandsFilter } = stateObject;
    if (brandsFilter.length !== 0) {
      setCurrentData((prevState) => {
        let nextState = [...prevState];
        return nextState.filter((n) => brandsFilter.includes(n.brand));
      });
    }
  }
  function categoryHandler(stateObject) {
    const { categoryFilter } = stateObject;
    if (categoryFilter.length !== 0) {
      setCurrentData((prevState) => {
        let nextState = [...prevState];
        return nextState.filter((n) => categoryFilter.includes(n.category));
      });
    }
  }
  function priceHandler(stateObject) {
    const { priceRange } = stateObject;
    setCurrentData((prevState) => {
      let nextState = [...prevState];
      return nextState.filter((n) => n.finalPrice <= priceRange);
    });
  }
  // Reset
  function resetHandler() {
    setCurrentData(productsData);
  }
  return (
    <ProductsContext.Provider
      value={{
        sortHandler,
        brandsHandler,
        categoryHandler,
        priceHandler,
        currentData,
        resetHandler,
      }}
    >
      {Props.children}
    </ProductsContext.Provider>
  );
}
