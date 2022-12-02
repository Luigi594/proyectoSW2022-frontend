import { useState } from "react";
import { useGetAllMoviesQuery } from "@store/Services/PeliculasHome";
import CarouselUx from "./CarouselUx";
import { useNavigate } from "react-router-dom";

function Carousel() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const changeItem = (p: number, l: number) => {
    setPage(p);
    setLimit(l);
  };

  const { data, isLoading, error } = useGetAllMoviesQuery({
    page,
    items: limit,
  });

  const navigate = useNavigate();

  return (
    <CarouselUx
      error={error}
      data={data}
      isLoading={isLoading}
      changeItem={changeItem}
    />
  );
}

export default Carousel;
