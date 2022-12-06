import { useState } from "react";
import { useGetAllMoviesQuery } from "@store/Services/PeliculasHome";
import MoviesUx from "./MoviesUx";
import { BsCheckSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Movies() {
  const [page, setPage] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const onPageChange = (pageItem: number) => {
    setPage(pageItem);
  };

  const { data, isLoading, error } = useGetAllMoviesQuery(
    {
      page,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const addFavorite = (favorite: boolean) => {
    setIsFavorite(favorite);

    setTimeout(() => {
      setIsFavorite(false);
    }, 5000);

    clearTimeout(1);
  };

  const navigate = useNavigate();

  return (
    <div className="relative p-10 max-w-7xl mx-auto min-h-screen">
      <h2 className="text-slate-300 text-4xl font-semibold border-l-4 border-l-sky-600">
        <span className="ml-1">Películas del momento - 2022</span>
      </h2>

      <MoviesUx
        error={error}
        data={data}
        isLoading={isLoading}
        addFavorite={addFavorite}
        onPageChange={onPageChange}
        viewDetailMovie={(id) => {
          navigate(`/detail/${id}`);
        }}
      />

      {isFavorite && (
        <div
          id="toast-default"
          className="absolute right-10 top-10 flex items-center p-4 w-full max-w-xs rounded-lg shadow dark:text-gray-400 dark:bg-blue-600"
          role="alert">
          <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg bg-blue-800 text-blue-200">
            <BsCheckSquareFill />
          </div>
          <div className="ml-3 text-sm font-normal text-white">
            Pelicula añadida a tu lista!
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies;
