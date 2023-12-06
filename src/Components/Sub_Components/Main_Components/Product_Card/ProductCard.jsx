import PropTypes from "prop-types";
// Icons
import correct from "../../../../assets/Correct.svg";
import { LiaStarSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
// Components
import AddButton from "../../Buttons/Add_Button/AddButton";
// Hooks
import { useIsInCart } from "../../../Hooks/useIsInCart";
import { useState } from "react";
// Spinner
import BeatLoader from "react-spinners/BeatLoader";

export default function ProductCard({
  cardImage,
  cardRate,
  cardTitle,
  cardInfo,
  cardPrice,
  cardFinalPrice,
  cardId,
}) {
  const isInCart = useIsInCart(cardId);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="product-card">
      <Link to={`/product-details/${cardId}`} className="card-image">
        {!isLoaded && (
          <BeatLoader
            color="#d63636"
            margin={3}
            size={10}
            speedMultiplier={1}
          />
        )}
        <img src={cardImage} alt="" onLoad={() => setIsLoaded(true)} />
      </Link>
      <div className="card-info">
        <section>
          <ul className="rating">
            {cardRate.map((star, index) => (
              <li key={index}>
                <LiaStarSolid className="star" />
              </li>
            ))}
          </ul>
          <Link to={`/product-details/${cardId}`}>
            <h5 className="text-main">{cardTitle}</h5>
          </Link>
          <p className="text-small text-muted">{cardInfo}</p>
        </section>
        <section>
          <div className="prices">
            <h3 className="text-main">${cardFinalPrice.toLocaleString()}</h3>
            <del className="text-muted">${cardPrice.toLocaleString()}</del>
            <span
              className={`bg-[green] ml-auto p-[3px] rounded-[3px] ${
                isInCart ? "visible" : "invisible"
              }`}
            >
              <img src={correct} alt="added" />
            </span>
          </div>
          <AddButton
            isInCart={isInCart}
            isFullButton={true}
            productId={cardId}
            productTitle={cardTitle}
          />
        </section>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  cardImage: PropTypes.string,
  cardRate: PropTypes.array,
  cardTitle: PropTypes.string,
  cardInfo: PropTypes.string,
  cardPrice: PropTypes.number,
  cardFinalPrice: PropTypes.number,
  cardId: PropTypes.number,
};
