import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return <p className="text-3xl text-center font-bold">Loading....</p>;
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={location} replace />;
};

export default PrivateRoute;
