import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IPeliculas {
  imagen: string;
  titulo: string;
  duracion: string;
  sinopsis: string;
  generos: string;
  rating: string;
  fecha_lanzamiento: string;
  director: string;
  actores: string;
  puntuaciones: number; // Rating de Usuarios
  trailer: string; // Link de YT
  status: string;
  _id?: string;
}

export interface IPeliculasResponse {
  totalDocuments: number;
  totalPages: number;
  page: number;
  itemsPerPage: number;
  items: IPeliculas[];
}

export interface IPeliculasFavoritas {
  peliculas: IPeliculas[];
}

export const peliculasApi = createApi({
  reducerPath: "peliculasApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}/movies`,
  }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: ({ page = 1, items = 20 }) => ({
        url: `?page=${page}&items=${items}`,
      }),
      providesTags: ["Movies"],
    }),
  }),
});

export const { useGetAllMoviesQuery } = peliculasApi;
