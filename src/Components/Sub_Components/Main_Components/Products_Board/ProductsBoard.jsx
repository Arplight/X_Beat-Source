import { useContext, useEffect, useReducer, useState } from "react";
import useActive from "../../../Hooks/useActive";
import { ProductsContext } from "../../../Contexts/ProductsProvider";
// Boards
import BoardLarge from "./Boards/BoardLarge";
import BoardSmall from "./Boards/BoardSmall";

export default function ProductsBoard() {
  const [active, activeHandler, setActive] = useActive(null);
  const stateObjectInitial = {
    sortBy: null,
    brandsFilter: [],
    categoryFilter: [],
    priceRange: 3000,
  };
  const { sortHandler, brandsHandler, categoryHandler, priceHandler } =
    useContext(ProductsContext);
  const [boardState, setBoardState] = useState({
    isReset: false,
    isChanged: false,
  });

  // StateObject Reducer Function
  function reducer(stateObject, action) {
    switch (action.type) {
      case "sort": {
        return { ...stateObject, sortBy: action.currentSort };
      }
      case "brandFilter": {
        if (action.brandIsChecked) {
          return {
            ...stateObject,
            brandsFilter: [...stateObject.brandsFilter, action.currentBrand],
          };
        } else {
          return {
            ...stateObject,
            brandsFilter: stateObject.brandsFilter.filter(
              (n) => n !== action.currentBrand
            ),
          };
        }
      }
      case "categoryFilter": {
        if (action.categoryIsChecked) {
          return {
            ...stateObject,
            categoryFilter: [
              ...stateObject.categoryFilter,
              action.currentCategory,
            ],
          };
        } else {
          return {
            ...stateObject,
            categoryFilter: stateObject.categoryFilter.filter(
              (n) => n !== action.currentCategory
            ),
          };
        }
      }
      case "priceRange": {
        return {
          ...stateObject,
          priceRange: action.currentRange,
        };
      }
      case "reset": {
        return stateObjectInitial;
      }
      default:
        break;
    }
  }

  // State Object Setters

  // Sorting
  function sortSetter(e) {
    dispatch({ type: "sort", currentSort: e.target.getAttribute("data-sort") });
  }

  // Filter By Brand
  function brandSetter(e) {
    dispatch({
      type: "brandFilter",
      currentBrand: e.target.getAttribute("data-filter"),
      brandIsChecked: e.target.checked,
    });
  }

  // Filter By Category
  function categorySetter(e) {
    dispatch({
      type: "categoryFilter",
      currentCategory: e.target.getAttribute("data-filter"),
      categoryIsChecked: e.target.checked,
    });
  }

  // Filter By Price
  function priceSetter(e) {
    dispatch({
      type: "priceRange",
      currentRange: Number(e.target.value),
    });
  }

  // Products Board Reset
  function boardReset() {
    dispatch({ type: "reset" });
    setBoardState((prevState) => {
      return { ...prevState, isReset: true };
    });
    setActive(null);
    setTimeout(() => {
      setBoardState((prevState) => {
        return { ...prevState, isReset: false };
      });
    }, 100);
  }

  const [stateObject, dispatch] = useReducer(reducer, stateObjectInitial);

  // Checking For Board State
  useEffect(() => {
    if (JSON.stringify(stateObject) === JSON.stringify(stateObjectInitial)) {
      setBoardState((prevState) => {
        return { ...prevState, isChanged: false };
      });
    } else {
      setBoardState((prevState) => {
        return { ...prevState, isChanged: true };
      });
    }
  }, [stateObject]);
  // Calling Handlers
  useEffect(() => {
    sortHandler(stateObject);
    brandsHandler(stateObject);
    categoryHandler(stateObject);
    priceHandler(stateObject);
  }, [stateObject]);
  return (
    <>
      <BoardLarge
        boardState={boardState}
        boardReset={boardReset}
        sortSetter={sortSetter}
        brandSetter={brandSetter}
        categorySetter={categorySetter}
        priceSetter={priceSetter}
        stateObject={stateObject}
        active={active}
        activeHandler={activeHandler}
      />
      <BoardSmall
        boardState={boardState}
        boardReset={boardReset}
        sortSetter={sortSetter}
        brandSetter={brandSetter}
        categorySetter={categorySetter}
        priceSetter={priceSetter}
        stateObject={stateObject}
        active={active}
        activeHandler={activeHandler}
      />
    </>
  );
}
