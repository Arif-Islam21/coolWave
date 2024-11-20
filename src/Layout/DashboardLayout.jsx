import { Outlet } from "react-router-dom";
import Sidebar from "../Page/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-4 ">
      <div className="grid border-2 w-full h-full col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-10 grid h-full w-full border-2">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
