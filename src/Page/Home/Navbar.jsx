import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import userIcon from "../../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-serif italic">Cool Wave</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL || userIcon}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              <li className="disabled disabled:text-black">
                <a className="justify-between">{user?.email}</a>
              </li>
              <NavLink className="btn btn-outline btn-sm px-6 font-bold btn-neutral my-2">
                Dashboard
              </NavLink>
              <button
                onClick={logOut}
                className="btn btn-outline btn-sm px-6 font-bold btn-neutral"
              >
                Logout
              </button>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-outline px-6 font-bold btn-neutral"
            >
              Login
            </Link>
            <Link to="/register" className="btn px-6 font-bold btn-neutral">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
