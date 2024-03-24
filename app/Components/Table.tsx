"use client";
import Image from "next/image";
/* eslint-disable react/no-unescaped-entities */

interface Character {
  id: number;
  image: string;
  name: string;
  status: string;
  gender: string;
  origin: {
    name: string;
  };
}

interface TableProps {
  characters: Character[];
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

const Table: React.FC<TableProps> = ({
  characters,
  totalPages,
  currentPage,
  setCurrentPage,
  handleNextPage,
  handlePreviousPage,
}) => {
  return (
    <table className="!w-[80%] mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
        <table className="w-[80%] mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Origin
              </th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character) => (
              <tr
                key={character.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-2 py-1 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Image
                    src={character?.image}
                    alt={"character Image"}
                    width={50}
                    height={50}
                  />
                </th>
                <td className="px-2 py-1 text-center">{character?.name}</td>
                <td className="px-2 py-1 text-center">{character?.status}</td>
                <td className="px-2 py-1 text-center">{character?.gender}</td>
                <td className="px-2 py-1 text-center">
                  {character?.origin?.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 w-[480px] md:w-[80%] mx-auto"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {characters.length * currentPage}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {totalPages * 20}
            </span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 ">
            <li>
              <button
                onClick={handlePreviousPage}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white !rounded-none"
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {Array.from({ length: Math.min(totalPages, 10) }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                    currentPage === index + 1
                      ? "text-blue-600 border-blue-600 !bg-gray-500"
                      : ""
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            {currentPage > 10 && (
              <li>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white !bg-gray-500
                    
                    `}
                >
                  {currentPage}
                </button>
              </li>
            )}
            <li>
              <button
                onClick={handleNextPage}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white !rounded-none"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </table>
  );
};

export default Table;
