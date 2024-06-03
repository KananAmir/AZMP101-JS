import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import "./index.scss";
const Home = () => {
  return (
    <div id="home">
      <div className="">
        <div className="home">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
          >
            <SwiperSlide className="slide slide1">
              <div className="content">Tasty & Delicious Food</div>
            </SwiperSlide>
            <SwiperSlide className="slide slide2">Slide 2</SwiperSlide>
            <SwiperSlide className="slide slide3">Slide 3</SwiperSlide>
            <SwiperSlide className="slide slide1">Slide 1</SwiperSlide>
            <SwiperSlide className="slide slide2">Slide 2</SwiperSlide>
            <SwiperSlide className="slide slide3">Slide 3</SwiperSlide>
            <SwiperSlide className="slide slide1">Slide 1</SwiperSlide>
            <SwiperSlide className="slide slide2">Slide 2</SwiperSlide>
            <SwiperSlide className="slide slide3">Slide 3</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
