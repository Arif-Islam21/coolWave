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
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your name?</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;