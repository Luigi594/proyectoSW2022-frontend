import { HiUserPlus, HiHome, HiBars3 } from "react-icons/hi2";

const items = [
  {
    id: 1,
    href: "#",
    className:
      "text-md block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-700 -md:border-0 md:hover:text-blue-600 md:p-0 md:hover:text-blue-500 md:text-lg hover:text-blue-500",
    label: "Login",
    icon: <HiHome />,
  },
  {
    id: 2,
    href: "#",
    className:
      "text-md block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-700 -md:border-0 md:hover:text-blue-600 md:p-0 md:hover:text-blue-500 md:text-lg hover:text-blue-500",
    label: "Sign In",
    icon: <HiUserPlus />,
  },
  /* {
    id: 3,
    href: "#",
    className:
      "text-md block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-700 -md:border-0 md:hover:text-blue-600 md:p-0 md:hover:text-blue-500 md:text-lg hover:text-blue-500",
    label: "Contact",
  }, */
];

function NavbarLogin() {
  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-900">
      <div className="container p-5 flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <img
            src="https://i.ibb.co/TTBWVpz/Screenshot-20221120-055628.png"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
            width="150px"
          />
          
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false">
          <HiBars3 className="text-white w-8 h-8" />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col px-6 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {items.map((item) => (
              <li key={item.id}>
                <span className="flex items-center space-x-2">
                  <span className="text-gray-200 text-md md:text-lg">
                    {item.icon}
                  </span>

                  <a href={item.href} className={item.className}>
                    {item.label}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLogin;
