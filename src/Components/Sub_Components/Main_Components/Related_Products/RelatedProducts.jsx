// Context
import { useContext } from "react";
import { CurrentItemContext } from "../../../Contexts/CurrentItemProvider";
// Components
import ProductCard from "../Product_Card/ProductCard";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// Data
import productsData from "../../../../data/productsData";

export default function RelatedProducts() {
  const currentItem = useContext(CurrentItemContext);
  const category = currentItem.category;

  const related = productsData.filter(
    (product) => product.category === category
  );
  return (
    <div className="related-products">
      <h2 className="text-main text-center">Related Products</h2>

      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {related.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="pb-12 flex justify-center sm:block">
              <ProductCard
                key={item.id}
                cardId={item.id}
                cardImage={`${import.meta.env.BASE_URL}${item.images[0]}`}
                cardInfo={item.info}
                cardTitle={item.title}
                cardPrice={item.originalPrice}
                cardFinalPrice={item.finalPrice}
                cardRate={[...Array(item.rateCount).keys()]}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
