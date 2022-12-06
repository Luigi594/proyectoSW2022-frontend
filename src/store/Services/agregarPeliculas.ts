import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export interface IMovies {
  imagen: string;
  titulo: string;
  duracion: string;
  sinopsis: string;
  generos: "Terror" | "Comedia" | "Romance" | "Misterio";
  rating: "G" | "PG" | "PG-13" | "R";
  fecha_lanzamiento: Date;
  director: string;
  actores: string;
  puntuaciones: number; // Rating de Usuarios
  trailer: string; // Link de YT
  status: "ACT" | "INA" | "BLQ";
  _id?: unknown;
}

export interface INewMovie {
  imagen: string;
  titulo: string;
  duracion: string;
  sinopsis: string;
  generos: "Terror" | "Comedia" | "Romance" | "Misterio";
  rating: "G" | "PG" | "PG-13" | "R";
  fecha_lanzamiento: Date;
  director: string;
  actores: string;
  puntuaciones: number; // Rating de Usuarios
  trailer: string; // Link de YT
  status: "ACT" | "INA" | "BLQ";
}

// ----------------------------------------------------------------
export interface IGetAllMoviesResponse {
  total: number;
  totalPages: number;
  page: number;
  itemsPerPage: number;
  items: IMovies[];
}

export const MoviesApi = createApi({
  reducerPath: "MoviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}/movies`,
    prepareHeaders: (headers, { getState }) => {
      headers.set("apikey", process.env.REACT_APP_API_KEY as string);
      const token = (getState() as RootState).sec.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  tagTypes: ["Movie"],
  endpoints: (builder) => ({
    update: builder.mutation({
      query: (credentials) => ({
        url: `update/${credentials._id}`,
        method: "PUT",
        body: credentials,
      }),
      invalidatesTags: ["Movie"],
    }),
    allMovie: builder.query({
      query: ({ page = 1, items = 10 }) => ({
        url: `?page=${page}&items=${items}`,
      }),
      providesTags: ["Movie"],
    }),
    MovieById: builder.query({
      query: (id: string) => `byid/${id}`,
      providesTags: ["Movie"],
    }),
    newMovie: builder.mutation({
      query: (body: INewMovie) => {
        return {
          url: "new",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Movie"],
    }),
  }),
});

export const {
  useUpdateMutation,
  useAllMovieQuery,
  useMovieByIdQuery,
  useNewMovieMutation,
} = MoviesApi;
