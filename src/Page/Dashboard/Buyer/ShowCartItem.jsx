import { useQuery } from "@tanstack/react-query";
import useUser from "../../../Hooks/useUser";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";

const ShowCartItem = () => {
  const { userData } = useUser();
  const axiosCommon = useAxiosCommon();

  const { data: cartData = [] } = useQuery({
    queryKey: ["ShowCartItem"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/cart-items/${userData._id}`);
      return data;
    },
  });

  if (cartData.length === 0 || cartData.message === "No Items In Cart") {
    return (
      <div className="text-center text-3xl font-semibold">
        No items in cart.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(cartData) &&
            cartData.map((item, idx) => (
              <tr key={item._id}>
                <td>{idx + 1}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>$ {item.priceInt}</td>
                <td>{item.brand}</td>
                <td>{item.stockInt}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowCartItem;
