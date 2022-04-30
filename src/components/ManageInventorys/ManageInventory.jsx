import user from "../../assets/img/users-alt 1.png";
import plus from "../../assets/img/plus 1.png";
import "./ManageInventory.css";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";


const ManageInventory = () => {
  
  const { inventorys, deleteHandler, searchHandler } = useApi();
  
  
  return (
    <div className="w-screen ">
      <div className="w-full grid grid-cols-4 lg:px-24 ">
        <div>
          <div className="flex flex-col font-semibold  mt-8">
            <Link
              to="/manage-inventory"
              className="flex items-center space-x-2"
            >
              <img className="w-5" src={user} alt="" />
              <p>Manage Inventory</p>
            </Link>
            <Link
              to="/add-inventory"
              className="flex items-center space-x-2 mt-7"
            >
              <img className="w-5" src={plus} alt="" />
              <p>Add Inventory</p>
            </Link>
          </div>
        </div>
        <div className="  col-span-3 bg-[#F4F7FC]">
          <div className=" px-8  mt-8 w-full h-[88vh]">
            <div className="grid grid-cols-1 gap-4">
              {/* ---------------------------------------- */}

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="p-4">
                  <label for="table-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input onKeyPress={(e)=>searchHandler(e)}
                      type="text"
                      id="table-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for items"
                    />
                  </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="p-4"></th>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventorys.map((inventory) => (
                      <tr
                        key={inventory._id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-table-search-1"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="checkbox-table-search-1"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                        >
                          {inventory.title.slice(0, 20)}
                        </th>
                        <td className="px-6 py-4">Sliver</td>
                        <td className="px-6 py-4">Laptop</td>
                        <td className="px-6 py-4">${inventory.price}</td>
                        <td className="px-6 py-4 text-right">
                          <p
                            onClick={() => deleteHandler(inventory._id)}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Delete
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ---------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
