import SectionTitle from "../../Components/SectionTitle";
import TestimonialCard from "../../Components/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="my-8 container mx-auto">
      <SectionTitle
        title="Testimonials"
        description="What out happy client says"
      />
      <div className="flex gap-4">
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
