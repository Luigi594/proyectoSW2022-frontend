import React from "react";
import { IPeliculas, IPeliculasResponse } from "@store/Services/PeliculasHome";
import { Spinner } from "flowbite-react";
import { HiStar, HiOutlineHeart, HiPlay } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { setFavoriteMovie } from "@store/Slices/favoritesSlice";

interface Props {
  error?: any;
  data?: IPeliculasResponse;
  isLoading?: boolean;
  addFavorite?: (favorite: boolean) => void;
  changeLimitItems?: (page: number, limit: number) => void;
  viewDetailMovie?: (id: string) => void;
}

function MoviesUx({
  error,
  data,
  isLoading,
  addFavorite = (favorite) => {},
  changeLimitItems = (page, limit) => {},
  viewDetailMovie = (id) => {},
}: Props) {
  const dispatch = useDispatch();

  // funcion para truncar texto
  const truncarText = (texto: string, numeroTruncar: number) => {
    if (texto.length <= numeroTruncar) {
      return texto;
    }

    return texto.slice(0, numeroTruncar) + "...";
  };

  const handleMovieSelected = (data: IPeliculas) => {
    dispatch(setFavoriteMovie(data));
    addFavorite(true);
  };

  return (
    <div className="w-full">
      {isLoading && (
        <div className="text-center">
          <Spinner
            aria-label="Center-aligned Large spinner example"
            size="lg"
          />
        </div>
      )}

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {data &&
          data.items.map((item: IPeliculas) => (
            <div
              key={item._id}
              className="max-w-sm rounded-lg shadow-sm shadow-sky-400 bg-slate-900 hover:shadow-sky-500
              hover:shadow-md transition-all ease-in-out">
              <img
                className="rounded-lg max-h-64 object-cover object-top w-full"
                src={item.imagen}
                alt="pelicula"
              />
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center gap-1">
                    <HiStar className="w-8 h-8 text-yellow-400" />
                    <p className="font-medium text-lg text-white">
                      {item.puntuaciones}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <span
                      className="text-white text-2xl cursor-pointer"
                      onClick={(e: React.MouseEvent<HTMLSpanElement>) =>
                        handleMovieSelected(item)
                      }>
                      <HiOutlineHeart />
                    </span>
                    <p className="text-lg text-white">Favoritos</p>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <span className="text-white text-2xl cursor-pointer">
                      <HiPlay />
                    </span>
                    <p className="text-lg text-white">Trailer</p>
                  </div>
                </div>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
                  {item.titulo}
                </h5>

                <p className="mb-3 font-normal text-gray-300">
                  {truncarText(item.sinopsis, 100)}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MoviesUx;
