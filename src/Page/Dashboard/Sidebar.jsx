import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="min-h-screen h-full pl-2 pt-8 bg-amber-400">
      <NavLink to="/" className="text-2xl btn font-bold font-serif">
        Cool Wave
      </NavLink>
      {/* LINKN ITEMS */}
      <div className="my-6 px-4 ">
        <div>
          <NavLink
            className={`btn flex items-center justify-start btn-block my-1`}
          >
            <FaHome size={28} /> <span className="text-xl">Home</span>
          </NavLink>
        </div>
        <div className="">
          <button className={`btn flex items-center justify-start btn-block`}>
            <TbLogout2 size={28} /> <span className="text-xl">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
