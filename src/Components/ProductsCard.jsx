import { TbBrand4Chan } from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import useAxiosCommon from "../Hooks/useAxiosCommon";
import useUser from "../Hooks/useUser";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const ProductsCard = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, brand, category, photo, priceInt, stockInt, title } = product;
  const { userData } = useUser();

  const addToWishlist = async () => {
    if (userData?.email && _id) {
      await axios
        .patch("http://localhost:3000/wishlist/add", {
          email: userData?.email,
          productId: _id,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="card bg-base-100 mb-6 shadow-xl">
      <figure>
        <img src={photo} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase">{title}</h2>
        <div className="flex justify-between my-2">
          <p className="flex items-center gap-2">
            <TbBrand4Chan size={20} />
            {brand}
          </p>
          <p className="flex items-center gap-2">
            <MdCategory size={20} />
            {category}
          </p>
        </div>
        <div className="flex justify-between my-2">
          <p className="flex items-center gap-2">
            <IoIosPricetags size={20} />
            {priceInt}
          </p>
          <p className="flex items-center gap-2">
            <AiOutlineStock size={20} />
            {stockInt}
          </p>
        </div>
        <div className="card-actions justify-between">
          <button
            onClick={addToWishlist}
            className="btn btn-neutral btn-sm px-6"
          >
            Wishlist
          </button>
          <button className="btn btn-neutral btn-sm px-6">Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
