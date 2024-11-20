import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-4 ">
      <div className="grid border-2 w-full h-full col-span-2">Sidebar</div>
      <Outlet />
      <div className="col-span-10 grid h-full w-full border-2">
        Main content
      </div>
    </div>
  );
};

export default DashboardLayout;
