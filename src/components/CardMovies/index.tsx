import { useState } from "react";
import { useGetAllMoviesQuery } from "@store/Services/PeliculasHome";
import MoviesUx from "./MoviesUx";

function Movies() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const changeLimitItems = (pageItem: number, limitItem: number) => {
    setPage(pageItem);
    setLimit(limitItem);
  };

  const { data, isLoading, error } = useGetAllMoviesQuery(
    {
      page,
      items: limit,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <div className="relative p-10 max-w-7xl mx-auto">
      <h2 className="text-slate-300 text-4xl font-semibold border-l-4 border-l-sky-600">
        <span className="ml-1">Películas del momento - 2022</span>
      </h2>

      <MoviesUx
        error={error}
        data={data}
        isLoading={isLoading}
        changeLimitItems={changeLimitItems}
      />
    </div>
  );
}

export default Movies;
