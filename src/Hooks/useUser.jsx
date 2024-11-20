import useAuth from "./useAuth";
import useAxiosCommon from "./useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();

  const { data: userData = {} } = useQuery({
    queryKey: ["userData", user.email],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/user/${user?.email}`);
      return data;
    },
  });

  return userData;
};

export default useUser;
