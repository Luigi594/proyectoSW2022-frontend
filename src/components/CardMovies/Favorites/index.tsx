import { selectFavorites } from "@store/Slices/favoritesSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FavoritesUx from "./FavoritesUx";

function Favorites() {
  const favorites = useSelector(selectFavorites);

  const navigate = useNavigate();

  return (
    <div className="relative p-10 max-w-7xl mx-auto">
      <h2 className="text-slate-300 text-4xl font-semibold border-l-4 border-l-amber-500">
        <span className="ml-1">Mis Favoritos</span>
      </h2>
      <FavoritesUx
        favorites={favorites}
        viewDetailMovie={(id) => {
          navigate(`/detail/${id}`);
        }}
      />
    </div>
  );
}

export default Favorites;
