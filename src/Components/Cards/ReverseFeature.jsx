import image from "../../../public/hp.avif";

const ReverseFeature = () => {
  return (
    <div className="hero bg-base-200 min-h-[50vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Hp 15-fd0290TU</h1>
          <p className="py-6 max-w-2xl">
            Experience the perfect blend of style, functionality, and
            performance with the HP 15-fd0290TU laptop. Designed for modern
            users, this laptop boasts a sleek, lightweight design, making it
            ideal for work, study, or entertainment on the go.
          </p>
          <button className="btn btn-neutral">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ReverseFeature;
