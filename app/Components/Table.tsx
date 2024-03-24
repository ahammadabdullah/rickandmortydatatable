"use client";
import Image from "next/image";
import { useState } from "react";
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
  [key: string]: any;
}

interface TableProps {
  characters: Character[];
  totalPages: number;
  currentPage: number;
  setCharacters: (characters: Character[]) => void;
  setCurrentPage: (page: number) => void;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

const Table: React.FC<TableProps> = ({
  characters,
  setCharacters,
  totalPages,
  currentPage,
  setCurrentPage,
  handleNextPage,
  handlePreviousPage,
}): JSX.Element => {
  const [sortState, setSortState] = useState<number>(1);
  const handleSort = (key: string) => {
    const sortedCharacters = characters.sort((a, b) => {
      setSortState(sortState * -1);
      if (a[key] < b[key]) {
        return sortState;
      } else {
        return sortState * -1;
      }
    });
    setCharacters([...sortedCharacters]);
  };
  return (
    <table className="!w-[80%] mx-auto overflow-x-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 select-none ">
      <div className="relative  shadow-md sm:rounded-lg m-5">
        <table className="w-[80%] mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  ">
            <tr className="text-center">
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center justify-center">
                  Name
                  <a
                    onClick={() => handleSort("name")}
                    className="cursor-pointer"
                  >
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center justify-center">
                  Status
                  <a
                    onClick={() => handleSort("status")}
                    className="cursor-pointer"
                  >
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center justify-center">
                  Gender
                  <a
                    onClick={() => handleSort("gender")}
                    className="cursor-pointer"
                  >
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center justify-center">
                  Origin
                  <a
                    onClick={() => handleSort("origin.name")}
                    className="cursor-pointer"
                  >
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
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
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 w-[480px] md:w-[83%] lg:w-[80%] mx-auto"
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
