import Searchbar from "../../Components/Searchbar";
import SectionTitle from "../../Components/SectionTitle";

const Products = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle
        title="All Products"
        description="See all our products here. Find your favourite"
      />
      <Searchbar />
    </div>
  );
};

export default Products;
