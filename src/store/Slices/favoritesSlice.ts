import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPeliculas } from "@store/Services/PeliculasHome";

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
    resetFavorite: (state) => {
      state.imagen = "";
      state.titulo = "";
      state.duracion = "";
      state.sinopsis = "";
      state.generos = "";
      state.rating = "";
      state.fecha_lanzamiento = "";
      state.director = "";
      state.actores = "";
      state.puntuaciones = 0;
      state.trailer = "";
      state.status = "";
      state._id = "";
    },
  },
});
