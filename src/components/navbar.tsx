import { resetSecData, selectAuth } from "@store/Slices/secSlice";
import { HiBars3, HiHeart, HiHome } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.png";
import { FaPowerOff } from "react-icons/fa";

const items = [
  {
    id: 1,
    href: "/home",
    className:
      "text-md block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-700 -md:border-0 md:hover:text-blue-600 md:p-0 md:hover:text-blue-500 md:text-lg hover:text-blue-500",
    label: "Home",
    icon: <HiHome />,
  },
  {
    id: 2,
    href: "/favorites",
    className:
      "text-md block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-700 -md:border-0 md:hover:text-blue-600 md:p-0 md:hover:text-blue-500 md:text-lg hover:text-blue-500",
    label: "Mis Favoritos",
    icon: <HiHeart />,
  },
];

function Navbar() {
  const user = useSelector(selectAuth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(resetSecData());
    navigate("/login");
  };

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-900">
      <div className="container p-5 flex flex-wrap items-center justify-between mx-auto">
        <Link to={"/home"} className="flex items-center">
          <img
            src={Logo}
            className="h-14 w-20 object-cover rounded-full"
            alt="movieflash Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Movie Flash
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false">
          <HiBars3 className="text-white w-8 h-8" />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="flex items-center">
            <ul className="flex flex-col px-6 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {items.map((item) => (
                <li key={item.id}>
                  <span className="flex items-center space-x-2">
                    <span className="text-gray-200 text-md md:text-lg">
                      {item.icon}
                    </span>

                    <Link to={item.href} className={item.className}>
                      {item.label}
                    </Link>
                  </span>
                </li>
              ))}

              {user && (
                <div className="flex items-center gap-2">
                  <span className="text-white text-xl font-semibold">
                    {user.name}
                  </span>
                  <span
                    className="text-white text-2xl cursor-pointer"
                    onClick={handleLogout}>
                    <FaPowerOff />
                  </span>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
