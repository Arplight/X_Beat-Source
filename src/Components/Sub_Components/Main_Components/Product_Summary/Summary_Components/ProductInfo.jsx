// Icons
import { LiaStarSolid } from "react-icons/lia";
import Correct from "../../../../../assets/Correct.svg";
// Context
import { useContext } from "react";
import { CurrentItemContext } from "../../../../Contexts/CurrentItemProvider";
import AddButton from "../../../Buttons/Add_Button/AddButton";
import { useIsInCart } from "../../../../Hooks/useIsInCart";

export default function ProductInfo() {
  const currentItem = useContext(CurrentItemContext);
  const saved = currentItem.originalPrice - currentItem.finalPrice;
  const percentage = Math.floor((saved / currentItem.originalPrice) * 100);
  const rateCount = [...Array(currentItem.rateCount).keys()];
  const isInCart = useIsInCart(currentItem.id);

  return (
    <section className="flex flex-col w-full lg:w-2/5">
      <div className="flex flex-col border-b-[1px] border-[#ffffff30] py-6">
        <h5 className="text-main">{currentItem.title}</h5>
        <p className="text-large text-main mb-4 font-normal">
          {currentItem.info}
        </p>
        <div className="flex items-center">
          <ul className="rating border-r-[1px] border-[#ffffff40] pr-2 py-0.5">
            {rateCount.map((start, index) => (
              <li key={index}>
                <LiaStarSolid className="star" />
              </li>
            ))}
          </ul>
          <p className="text-large text-muted pl-2">
            {currentItem.ratings.toLocaleString()} Ratings
          </p>
        </div>
      </div>
      <div className="flex flex-col border-b-[1px] border-[#ffffff30] py-6 gap-6">
        <section className="flex items-center">
          <div className="prices mr-auto">
            <h3 className="text-main">
              ${currentItem.finalPrice.toLocaleString()}
            </h3>
            <del className="text-muted">
              ${currentItem.originalPrice.toLocaleString()}
            </del>
          </div>
          <div className="in-stock">
            <span>
              <img src={Correct} alt="" />
            </span>
            <span>{isInCart ? "Added" : "In Stock"} </span>
          </div>
        </section>
        <section className="flex items-center">
          <p className="text-large text-green mr-auto">
            You save ${saved.toLocaleString()}&nbsp; ({percentage}%)
          </p>
          <p className="text-small text-muted">(Inclusive of all taxes)</p>
        </section>
      </div>
      <div className="flex flex-col border-b-[1px] border-[#ffffff30] py-6 gap-6 ">
        <p className="text-large text-main font-normal">Offers and Discounts</p>
        <section className="flex flex-wrap gap-3">
          <div className="offer-badge">
            <p className=" text-small text-main">No Cost EMI on Credit Card</p>
          </div>
          <div className="offer-badge">
            <p className="text-small text-main">Pay Later & Avail Cashback</p>
          </div>
        </section>
      </div>
      <div className="py-6">
        <AddButton
          isInCart={isInCart}
          isFullButton={false}
          productId={currentItem.id}
          productTitle={currentItem.title}
        />
      </div>
    </section>
  );
}
