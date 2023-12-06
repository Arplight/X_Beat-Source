// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
// Data
import productsData from "../../../../data/productsData";
// React Router
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div className="carousel mt-[80px]">
      <h2 className="text-main text-center">Featured Products</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{ 500: { slidesPerView: 2 }, 768: { slidesPerView: 3 } }}
        className="mySwiper"
      >
        {productsData
          .filter((i) => i.tag === "featured-product")
          .map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center justify-center h-full pb-20 current">
                <p className="text-large text-main title">{item.title}</p>
                <Link
                  to={`/product-details/${item.id}`}
                  className="w-2/3 carousel-image"
                >
                  <img src={item.images[0]} alt={item.brand} />
                </Link>
                <div className="prices">
                  <h3 className="text-main final-price">
                    ${item.finalPrice.toLocaleString()}
                  </h3>
                  <del className="text-muted original-price">
                    ${item.originalPrice.toLocaleString()}
                  </del>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
