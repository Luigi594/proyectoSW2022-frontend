import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

export interface IPelicula {
  imagen: string;
  titulo: string;
  duracion: string;
  sinopsis: string;
  generos: string;
  rating: string;
  fecha_lanzamiento: string;
  director: string;
  actores: string;
  puntuaciones: 0;
  trailer: string;
  status: string;
  _id: string;
}

const initialState: { peliculas: IPelicula[] } = {
  peliculas: [],
};

export const favoriteSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    setFavoriteMovie: (state, action: PayloadAction<IPelicula>) => {
      const pelicula: IPelicula = action.payload;

      const index = state.peliculas.findIndex((i) => {
        return i._id === pelicula._id;
      });

      if (index < 0) {
        state.peliculas = [...state.peliculas, pelicula];
      }
    },
    removeFromFavorite: (state, action: PayloadAction<IPelicula>) => {
      const pelicula: IPelicula = action.payload;

      const index = state.peliculas.findIndex((i) => {
        return i._id === pelicula._id;
      });

      // copiando el arreglo original
      let nuevoFavorito = [...state.peliculas];

      if (index >= 0) {
        nuevoFavorito.splice(index, 1);
      }

      // se reemplaza el nueevo valor del arreglo
      state.peliculas = nuevoFavorito;
    },
  },
});

export const { setFavoriteMovie, removeFromFavorite } = favoriteSlice.actions;
export const selectFavorites = (state: RootState) => state.favorite.peliculas;
export default favoriteSlice.reducer;
