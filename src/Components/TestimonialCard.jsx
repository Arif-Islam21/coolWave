import { FaQuoteRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { image, text, name } = item;
  return (
    <div className="w-full max-w-md px-8 border py-4 mt-16 bg-white min-h-[30vh] rounded-lg shadow-lg ">
      <div className="flex justify-center -mt-16 md:justify-end">
        <img
          className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full "
          alt="Testimonial avatar"
          src={image}
        />
      </div>

      <div className="flex justify-between items-center">
        <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-0">
          {name}
        </h2>
        <FaQuoteRight size={24} />
      </div>
      <p className="mt-2 text-sm text-gray-600 ">
        <span>{text}</span>
      </p>

      <div className="flex justify-end mt-4">
        <a className="text-lg font-medium text-blue-600 " role="link">
          {name}
        </a>
      </div>
    </div>
  );
};

export default TestimonialCard;
