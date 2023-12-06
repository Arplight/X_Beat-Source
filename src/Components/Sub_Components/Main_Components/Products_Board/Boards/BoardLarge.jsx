import { useContext } from "react";
import PropTypes from "prop-types";
import {
  brandsMenu,
  categoryMenu,
  sortMenu,
} from "../../../../../data/filterBarData";
import Checkbox from "../../../Checkbox_Input/Checkbox";
import { ProductsContext } from "../../../../Contexts/ProductsProvider";

export default function BoardLarge({
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
  return (
    <aside className="board-large hidden md:flex flex-col w-2/6 xl:w-1/6 bg-[#161819] gap-8 p-6 h-max ">
      <button
        className={`single-button ${
          boardState.isChanged ? "" : "button-disabled"
        }`}
        onClick={() => {
          resetHandler();
          boardReset();
        }}
      >
        Clear Filters
      </button>

      <div>
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
      <div className="flex flex-col gap-2.5">
        <h6 className="text-main pb-3  border-b-[1px] border-[#ffffff30]">
          Filter By
        </h6>
        <section>
          <b className="text-main text-large">Brands</b>
          <ul className="flex flex-col gap-1 py-3">
            {brandsMenu.map((item) => (
              <li key={item.id}>
                <label
                  htmlFor={item.label}
                  className="text-large text-main flex gap-3"
                >
                  <Checkbox
                    checkName={item.label}
                    checkId={item.label}
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
              <li key={item.id}>
                <label
                  htmlFor={item.label}
                  className="text-large text-main flex gap-3"
                >
                  <Checkbox
                    checkName={item.label}
                    checkId={item.label}
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
            <label htmlFor="price" className="text-large text-main block">
              $ {stateObject.priceRange.toLocaleString()}
            </label>
            <input
              type="range"
              name="price"
              id="price"
              min={400}
              max={3000}
              defaultValue={3000}
              onChange={priceSetter}
              value={boardState.isReset ? 3000 : undefined}
              className="w-full"
            />
          </div>
        </section>
      </div>
    </aside>
  );
}

BoardLarge.propTypes = {
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
