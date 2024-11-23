import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../Hooks/useAxiosCommon";
import { IoIosPricetags } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { TbBrandApplePodcast } from "react-icons/tb";
import { FaShopLock } from "react-icons/fa6";

const ProductDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();

  const { data: productInfo = {} } = useQuery({
    queryKey: ["ProductDetails"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/product/${id}`);
      return data;
    },
  });

  const {
    title,
    stockInt,
    sellerEmail,
    priceInt,
    photo,
    description,
    category,
    brand,
  } = productInfo;

  return (
    <div className="bg-base-200">
      <div className="hero container mx-auto min-h-[80vh]">
        <div className="hero-content flex-col  lg:flex-row">
          <img
            src={photo}
            className="max-w-sm rounded-lg object-cover h-96 shadow-2xl"
          />
          <div className="min-w-[40vw] lg:pl-12">
            <h1 className="text-5xl font-bold">{title}</h1>
            <div className="flex justify-between max-w-[30vw] my-6 ">
              <p className="flex items-center gap-2 font-bold">
                <IoIosPricetags size={24} />
                {priceInt}
              </p>
              <p className="flex items-center gap-2 font-bold">
                <MdCategory size={24} />
                {category}
              </p>
            </div>
            <div className="flex justify-between max-w-[30vw] my-6 ">
              <p className="flex items-center gap-2 font-bold">
                <AiOutlineStock size={24} />
                {stockInt}
              </p>
              <p className="flex items-center gap-2 font-bold">
                <TbBrandApplePodcast size={24} />
                {brand}
              </p>
            </div>
            <div className="flex justify-between max-w-[30vw] my-6 ">
              <p className="flex items-center gap-2 font-bold">
                <FaShopLock size={24} />
                {sellerEmail}
              </p>
            </div>
            <p className="italic">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
