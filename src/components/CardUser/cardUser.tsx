//import { MyModal } from '@components/Modal';
import MyModal from "@components/Modal";
import { IUser } from "@store/Services/Users";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { JsxElement } from "typescript";
import imgUser from "./user.png";
export const CardUser = (
  item: IUser,
  viewDetailClick: (id: string) => void,
  viewUpdateClick: (id: string) => void
) => {
  return (
    <div
      key={item._id}
      className="w-full max-w-xs mt-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={imgUser}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {item.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {item.email}
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            onClick={() => {
              viewUpdateClick(item._id);
            }}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Update
          </a>
          <a
            onClick={() => {
              viewDetailClick(item._id);
            }}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
            Detail
          </a>
        </div>
      </div>
    </div>
  );
};
