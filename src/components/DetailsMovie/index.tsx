import { useState } from "react";
import { useGetAllMoviesQuery } from "@store/Services/PeliculasHome";
import DetailsMovieUx from "./DetailsMovieUx";
import { useNavigate } from "react-router-dom";

function DetailsMovie() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);

    const changeLimitItems = (pageItem: number, limitItem: number) => {
        setPage(pageItem);
        setLimit(limitItem);
    };

    //Obtener los datos de la pelicula en especifico 
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
    
          <DetailsMovieUx
            error={error}
            data={data}
            isLoading={isLoading}
            changeLimitItems={changeLimitItems}
          />
        </div>
      );
}
export default DetailsMovie;
