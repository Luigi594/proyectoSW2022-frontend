import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPeliculas } from "@store/Services/PeliculasHome";
import { RootState } from "@store/store";

const initialState: IPeliculas = {
  imagen: "",
  titulo: "",
  duracion: "",
  sinopsis: "",
  generos: "",
  rating: "",
  fecha_lanzamiento: "",
  director: "",
  actores: "",
  puntuaciones: 0,
  trailer: "",
  status: "",
  _id: "",
};

export const favoriteSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    setFavoriteMovie: (state, action: PayloadAction<IPeliculas>) => {
      state.imagen = action.payload.imagen;
      state.titulo = action.payload.titulo;
      state.duracion = action.payload.duracion;
      state.sinopsis = action.payload.sinopsis;
      state.generos = action.payload.generos;
      state.rating = action.payload.rating;
      state.fecha_lanzamiento = action.payload.fecha_lanzamiento;
      state.director = action.payload.director;
      state.actores = action.payload.actores;
      state.puntuaciones = action.payload.puntuaciones;
      state.trailer = action.payload.trailer;
      state.status = action.payload.status;
      state._id = action.payload._id;
    },
  },
});

export const { setFavoriteMovie } = favoriteSlice.actions;
export const selectFavorites = (state: RootState) => state.favorite;
export default favoriteSlice.reducer;
