import { useState } from "react";
import { useGetAllMoviesQuery } from "@store/Services/PeliculasHome";
import ModificarMoviesUx from "./ModificarMoviesUx";
import { useNavigate } from "react-router-dom";

function ModificarMoviesux() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const changeItem = (pageItem: number, limitItem: number) => {
    setPage(pageItem);
    setLimit(limitItem);
  };

  const { data, isLoading, error } = useGetAllMoviesQuery({
    page,
    items: limit,
  });

  const navigate = useNavigate();

  return (
    <div className="relative p-10 max-w-7x1 mx-auto">
    <ModificarMoviesUx
      error={error}
      data={data}
      isLoading={isLoading}
      changeItem={changeItem}
    />
    </div>
  );
}

export default ModificarMoviesux;