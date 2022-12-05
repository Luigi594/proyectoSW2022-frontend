import { IPeliculas } from "@store/Services/PeliculasHome";
import { HiHeart, HiPlay, HiStar } from "react-icons/hi2";

interface Props {
  favorites?: IPeliculas;
}

function FavoritesUx({ favorites }: Props) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <div
        className="max-w-sm rounded-lg shadow-sm shadow-sky-400 bg-slate-900 hover:shadow-sky-500
        hover:shadow-md transition-all ease-in-out">
        <img
          className="rounded-lg max-h-64 object-cover object-top w-full"
          src={favorites?.imagen}
          alt="pelicula"
        />
        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <HiStar className="w-8 h-8 text-yellow-400" />
              <p className="font-medium text-lg text-white">
                {favorites?.puntuaciones}
              </p>
            </div>

            <span className="text-white text-2xl cursor-pointer">
              <HiHeart />
            </span>

            <span className="text-white text-2xl cursor-pointer">
              <HiPlay />
            </span>
          </div>

          <div className="flex items-center justify-between">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
              {favorites?.titulo}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritesUx;
