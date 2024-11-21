const Searchbar = () => {
  return (
    <div className="flex justify-between items-center my-4">
      <div className="join">
        <input
          type="text"
          placeholder="Search Here"
          className="input input-bordered join-item"
        />
        <button className="btn btn-neutral join-item">Search</button>
      </div>
      <select className="select select-bordered w-full max-w-40">
        <option value="asc">Low to high</option>
        <option value="desc">High to low</option>
      </select>
      <select
        className="select select-bordered w-full max-w-40"
        defaultValue="selected"
      >
        <option disabled value="selected">
          Brand
        </option>
        <option value="asc">Low to high</option>
        <option value="desc">High to low</option>
      </select>
      <select
        className="select select-bordered w-full max-w-40"
        defaultValue="selected"
      >
        <option disabled value="selected">
          Category
        </option>
        <option value="asc">Low to high</option>
        <option value="desc">High to low</option>
      </select>
    </div>
  );
};

export default Searchbar;
