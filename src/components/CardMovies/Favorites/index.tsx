import { selectFavorites } from "@store/Slices/favoritesSlice";
import { useSelector } from "react-redux";
import FavoritesUx from "./FavoritesUx";

function Favorites() {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="relative p-10 max-w-7xl mx-auto">
      <h2 className="text-slate-300 text-4xl font-semibold border-l-4 border-l-amber-500">
        <span className="ml-1">Mis Favoritos</span>
      </h2>
      <FavoritesUx favorites={favorites} />
    </div>
  );
}

export default Favorites;
