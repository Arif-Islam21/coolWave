import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import useUser from "../../Hooks/useUser";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Sidebar = () => {
  const userData = useUser();

  const buyerLink = [
    {
      id: 1,
      path: "/wishlist",
      title: "Wishlist",
      icon: <FaHeart size={24} />,
    },
    {
      id: 2,
      path: "/cart",
      title: "Cart",
      icon: <FaCartShopping size={24} />,
    },
  ];

  return (
    <div className="min-h-screen h-full pl-2 pt-8 bg-amber-400">
      <NavLink to="/" className="text-2xl btn font-bold font-serif">
        Cool Wave
      </NavLink>
      {/* LINKN ITEMS */}
      <div className="my-6 px-4 ">
        <div>
          {buyerLink.map((item) => (
            <NavLink
              key={item.id}
              className={`btn flex items-center justify-start btn-block my-2`}
            >
              {item.icon} <span className="text-xl">{item.title}</span>
            </NavLink>
          ))}
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
