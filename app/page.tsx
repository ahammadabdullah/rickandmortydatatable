"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getStaticProps } from "next/dist/build/templates/pages";
const Table = dynamic(() => import("./Components/Table"));

export default function Home() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const api = `https://rickandmortyapi.com/api/character?page=${currentPage}`;

    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        // Handle the data from the API response
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch request
        console.error(error);
      });
  }, [currentPage]);

  const handlePreviousPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h3 className="text-center text-2xl pt-5 w-fit mx-auto">
        RickAndMorty data table
      </h3>
      <div className="w-full overflow-x-auto">
        <Table
          characters={characters}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          totalPages={totalPages}
        />
      </div>
    </main>
  );
}
