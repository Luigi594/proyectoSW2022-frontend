import { useState } from "react";
import { useGetMovieByIdQuery } from "@store/Services/PeliculasHome";
import DetailsMovieUx from "./DetailsMovieUx";
import { useParams  } from "react-router-dom";

function DetailsMovie() {
    const { id } = useParams();
    const {data, isLoading, error } = useGetMovieByIdQuery(id as string);

    return (
        <div className="relative p-10 max-w-7xl mx-auto">
    
          <DetailsMovieUx
            data={data}
            isLoading={isLoading}
            error={error}
           
          />
        </div>
      );
}
export default DetailsMovie;
