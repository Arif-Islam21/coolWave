import Categories from "./Categories";
import ContactUs from "./ContactUs";
import FAQsection from "./FAQsection";
import FeaturedProduct from "./FeaturedProduct";
import FeaturedProductss from "./FeaturedProductss";
import Hero from "./Hero";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProductss />
      <Testimonial />
      <Categories />
      <FeaturedProduct />
      <FAQsection />
      <ContactUs />
    </div>
  );
};

export default Home;
