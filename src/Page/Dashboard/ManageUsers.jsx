import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const ManageUsers = () => {
  const axiosCommon = useAxiosCommon();

  const { data } = useQuery({
    queryKey: ["manageUsers"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/users");
      return data;
    },
  });
  console.log(data);

  return <div></div>;
};

export default ManageUsers;
