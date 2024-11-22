import SectionTitle from "../../Components/SectionTitle";
import TestimonialCard from "../../Components/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Testimonial = () => {
  const reviews = [
    {
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "John Doe",
      text: "Amazing products and great customer service! Highly recommend this shop.",
    },
    {
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sarah Lee",
      text: "The latest gadgets at unbeatable prices. Love shopping here!",
    },
    {
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Michael Brown",
      text: "Fast delivery and excellent quality. My go-to gadget store!",
    },
    {
      image:
        "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Emily Clark",
      text: "I found exactly what I needed. Fantastic experience overall!",
    },
    {
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "David Wilson",
      text: "Wide variety of products and very helpful support team!",
    },
    {
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sophia Martinez",
      text: "Great deals and premium quality gadgets. Will shop again soon!",
    },
  ];

  return (
    <div className="my-8 container mx-auto">
      <SectionTitle
        title="Testimonials"
        description="What out happy client says"
      />
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Testimonial;
