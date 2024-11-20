import Categories from "./Categories";
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
    </div>
  );
};

export default Home;
