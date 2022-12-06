import { useGetAllMoviesQuery } from "@store/Services/PeliculasHome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieListUx from "./MovieListUx";

function MovieList() {
  const [page, setPage] = useState(1);

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

  const navigate = useNavigate();

  return (
    <div className="relative justify-center p-10 mx-auto max-w-7xl">
      <h2 className="text-slate-300 text-4xl font-semibold">
        <span className="ml-1">
          Lista de peliculas -{" "}
          <span className="underline decoration-sky-600">Administrativa</span>
        </span>
      </h2>

      <div className="mt-10">
        <MovieListUx
          data={data}
          isLoading={isLoading}
          onPageChange={onPageChange}
          viewDetailMovie={(id) => {
            navigate(`/UpdateMovie/${id}`);
          }}
          deleteMovie={(id) => {
            console.log(id);
          }}
        />
      </div>
    </div>
  );
}

export default MovieList;
