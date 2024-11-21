import { useQuery } from "@tanstack/react-query";
import useUser from "../../../Hooks/useUser";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";

const ShowWishlistItem = () => {
  const { userData } = useUser();
  const axiosCommon = useAxiosCommon();

  const { data } = useQuery({
    queryKey: ["ShowWishlistItem"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/wishlist-items/${userData._id}`);
      return data;
    },
  });

  console.log(data);

  return <div></div>;
};

export default ShowWishlistItem;
