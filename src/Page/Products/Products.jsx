import { useEffect, useState } from "react";
import Searchbar from "../../Components/Searchbar";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import ProductsCard from "../../Components/ProductsCard";

const Products = () => {
  const axiosCommon = useAxiosCommon();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axiosCommon.get(`/products`);
      setProducts(data);
    };
    fetchProducts();
  }, [axiosCommon]);

  return (
    <div className="container mx-auto">
      <SectionTitle
        title="All Products"
        description="See all our products here. Find your favourite"
      />
      <Searchbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
