import SectionTitle from "../../Components/SectionTitle";

const AddProduct = () => {
  return (
    <div>
      <SectionTitle
        title="Add Products Here"
        description="Add your products for getting more clients "
      />
      <div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 border-2 px-4 lg:px-12">
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-md"
              />
            </label>
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-md"
              />
            </label>
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-md"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
