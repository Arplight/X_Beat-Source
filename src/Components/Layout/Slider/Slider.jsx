// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Data
import SliderData from "../../../data/SliderData";
// React Router
import { Link } from "react-router-dom";
export default function Slider() {
  return (
    <div className="slider mt-[80px] ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {SliderData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex items-center justify-center "
          >
            <h1 id="category">{item.category}</h1>
            <div className="flex h-full flex-col-reverse md:flex-row container gap-8 pb-20 items-center">
              <div className="slider-info w-full md:w-1/2 h-max flex flex-col justify-center">
                <h2 className="text-main mb-2 slider-title">{item.title}</h2>
                <h1 className="text-main slider-caption">{item.caption}</h1>
                <div className="prices">
                  <h3 className="text-main my-6">
                    ${item.finalPrice.toLocaleString()}
                  </h3>
                  <del className="text-muted">
                    ${item.originalPrice.toLocaleString()}
                  </del>
                </div>
                <Link
                  to={`/product-details/${item.id}`}
                  className="single-button w-max"
                >
                  Shop Now
                </Link>
              </div>
              <div className="slider-image w-full  md:w-1/2  m-auto h-2/5 md:h-full">
                <img src={item.images[0]} alt={item.brand} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
