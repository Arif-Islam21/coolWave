import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import FeaturedProductCard from "../../Components/FeaturedProductCard";

const FeaturedProductss = () => {
  const details = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1524711212733-10ef1b0bec75?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Latest Smartphones for Tech Enthusiasts",
      description:
        "Explore advanced smart phones with cutting-edge features and sleek designs.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Smartwatches for a Smarter Lifestyle",
      description:
        "Stylish smartwatches for fitness, health tracking, and connectivity.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Noise-Canceling Headphones & Earbuds",
      description:
        "Experience immersive sound with noise-canceling audio devices.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "High-Performance Laptops for Every Need",
      description:
        "Powerful laptops designed for gaming, work, and creativity.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Cutting-Edge Smart Home Devices",
      description:
        "Upgrade with smart home gadgets for convenience and security.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/218863/pexels-photo-218863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Portable Power Banks for On-the-Go Charging",
      description:
        "Stay charged with compact, fast-charging portable power banks.",
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <SectionTitle
        title="Featured Products"
        description="See all our featured products here"
      />
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {details?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <FeaturedProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default FeaturedProductss;
