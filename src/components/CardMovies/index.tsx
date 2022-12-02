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

  const { data, isLoading, error } = useGetAllMoviesQuery({
    page,
    items: limit,
  });

  return (
    <div className="p-10 max-w-xl">
      <h2 className="text-slate-300 text-4xl font-semibold underline decoration-sky-600">
        Películas del momento
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
