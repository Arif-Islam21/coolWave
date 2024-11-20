import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import HeroImage from "../../Components/HeroImage";

const Hero = () => {
  return (
    <Swiper
      navigation={true}
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <HeroImage />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
