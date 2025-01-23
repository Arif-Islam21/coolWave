import image from "../../../public/hp.avif";

const ReverseFeature = () => {
  return (
    <div className="hero bg-base-200 min-h-[50vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">I pun 16 Pro Max</h1>
          <p className="py-6 max-w-2xl">
            Introducing the iPhone 16 – Where Innovation Meets Elegance.
            Experience unparalleled performance with the fastest chip ever,
            breathtaking visuals on the all-new ProMotion display, and
            revolutionary camera capabilities that redefine photography.
            Designed for the future, built for today. The iPhone 16 – your next
            leap forward.
          </p>
          <button className="btn btn-neutral">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ReverseFeature;
