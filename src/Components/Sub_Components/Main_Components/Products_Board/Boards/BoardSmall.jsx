import { useContext, useState } from "react";
import PropTypes from "prop-types";
import {
  brandsMenu,
  categoryMenu,
  sortMenu,
} from "../../../../../data/filterBarData";
import Checkbox from "../../../Checkbox_Input/Checkbox";
import { ProductsContext } from "../../../../Contexts/ProductsProvider";
// Icons
import { BiSort } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import { FcFilledFilter } from "react-icons/fc";
import { FcClearFilters } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";

export default function BoardSmall({
  boardState,
  boardReset,
  sortSetter,
  brandSetter,
  categorySetter,
  priceSetter,
  stateObject,
  active,
  activeHandler,
}) {
  const { resetHandler } = useContext(ProductsContext);
  const [boardIsOpened, setBoardIsOpened] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("");
  return (
    <>
      <div
        className={`sort-board block md:hidden container m-auto ${
          currentMenu === "sort" ? "" : "menu-collapsed"
        }`}
      >
        <button className="close-button" onClick={() => setCurrentMenu("")}>
          <IoMdClose className="close" />
        </button>
        <h6 className="text-main pb-3  border-b-[1px] border-[#ffffff30]">
          Sort By
        </h6>
        <ul className="flex flex-col gap-1 pt-3">
          {sortMenu.map((item) => (
            <li key={item.id} className="w-max">
              <p
                className={`text-large text-main sort-item ${
                  active === item.title ? "sort-active" : ""
                }`}
                data-active={item.title}
                data-sort={item.title}
                onClick={(e) => {
                  activeHandler(e);
                  sortSetter(e);
                }}
              >
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex md:hidden flex-col gap-2.5 filter-board p-6 container m-auto ${
          currentMenu === "filter" ? "" : "menu-collapsed"
        }`}
      >
        <button className="close-button" onClick={() => setCurrentMenu("")}>
          <IoMdClose className="close" />
        </button>
        <h6 className="text-main pb-3  border-b-[1px] border-[#ffffff30]">
          Filter By
        </h6>
        <section>
          <b className="text-main text-large">Brands</b>
          <ul className="flex flex-col gap-1 py-3">
            {brandsMenu.map((item) => (
              <li key={`${item.id}-small`}>
                <label
                  htmlFor={`${item.label}-small`}
                  className="text-large text-main flex gap-3"
                >
                  <Checkbox
                    checkName={`${item.label}-small`}
                    checkId={`${item.label}-small`}
                    checkData={item.label}
                    checkSetter={brandSetter}
                    isReset={boardState.isReset}
                  />
                  {item.label}
                </label>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <b className="text-main text-large ">Category</b>
          <ul className="flex flex-col gap-1 py-3">
            {categoryMenu.map((item) => (
              <li key={`${item.id}-small`}>
                <label
                  htmlFor={`${item.label}-small`}
                  className="text-large text-main flex gap-3"
                >
                  <Checkbox
                    checkName={`${item.label}-small`}
                    checkId={`${item.label}-small`}
                    checkData={item.label}
                    checkSetter={categorySetter}
                    isReset={boardState.isReset}
                  />
                  {item.label}
                </label>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <b className="text-main text-large">Price</b>
          <div className="pt-3">
            <label htmlFor="price-small" className="text-large text-main block">
              $ {stateObject.priceRange.toLocaleString()}
            </label>
            <input
              type="range"
              name="price-small"
              id="price-small"
              min={400}
              max={3000}
              defaultValue={3000}
              onChange={priceSetter}
              value={boardState.isReset ? 3000 : undefined}
            />
          </div>
        </section>
      </div>
      <div
        className={`board-small items-center flex md:hidden bg-black w-full py-3 h-max gap-4 ${
          boardIsOpened ? "" : "board-closed"
        }`}
      >
        <div className="container w-full flex  m-auto ">
          <span
            className="w-1/3 flex justify-center gap-1 items-center"
            id="sort"
            onClick={() => setCurrentMenu("sort")}
          >
            <BiSort className=" board-icon text-main" />
            <p className="text-main board-label font-medium">Sort</p>
          </span>
          <span
            className="w-1/3 flex justify-center gap-1 items-center"
            onClick={() => setCurrentMenu("filter")}
          >
            <FaFilter className=" board-icon text-main" />
            <p className="text-main board-label font-medium">Filter</p>
          </span>

          <button
            className={`single-button w-1/3 ${
              boardState.isChanged ? "" : "button-disabled"
            }`}
            onClick={() => {
              resetHandler();
              boardReset();
            }}
          >
            Clear Filters
          </button>
        </div>
        <button
          className="board-open-close"
          onClick={() => {
            setBoardIsOpened(!boardIsOpened);
            setCurrentMenu(null);
          }}
        >
          {boardIsOpened ? (
            <FcClearFilters className="text-main" />
          ) : (
            <FcFilledFilter className="text-main" />
          )}
        </button>
      </div>
    </>
  );
}

BoardSmall.propTypes = {
  boardState: PropTypes.object,
  boardReset: PropTypes.func,
  sortSetter: PropTypes.func,
  brandSetter: PropTypes.func,
  categorySetter: PropTypes.func,
  priceSetter: PropTypes.func,
  stateObject: PropTypes.object,
  active: PropTypes.string,
  activeHandler: PropTypes.func,
};
