import { useState } from "react";
import {
  useUpdateMutation,
  useMovieByIdQuery,
} from "@store/Services/agregarPeliculas";
import ModificarMoviesUx from "./ModificarMoviesUx";
import { useNavigate, useParams } from "react-router-dom";

export interface IMovieNew {
  _id: string;
  imagen: string;
  titulo: string;
  duracion: string;
  sinopsis: string;
  generos: string;
  rating: string;
  fecha_lanzamiento: Date;
  director: string;
  actores: string;
  puntuaciones: number; // Rating de Usuarios
  trailer: string; // Link de YT
  status: string;
}

const ModificarMovies = () => {
  const Navigate = useNavigate();

  const { id } = useParams();
  const { data } = useMovieByIdQuery(id as string);

  const [form, setForm] = useState<IMovieNew>({
    _id: data?._id as string,
    imagen: data?.imagen as string,
    titulo: data?.titulo as string,
    duracion: data?.duracion as string,
    sinopsis: data?.sinopsis as string,
    generos: data?.generos as string,
    rating: data?.rating as string,
    fecha_lanzamiento: data?.fecha_lanzamiento as Date,
    director: data?.director as string,
    actores: data?.actores as string,
    puntuaciones: data?.puntuaciones as number, // Rating de Usuarios
    trailer: data?.trailer as string, // Link de YT
    status: data?.status as string,
  });

  const [update, { isLoading, error }] = useUpdateMutation();

  const onChangeHandler = (name: string, value: string | number) => {
    setForm({ ...form, [name]: value });
  };
  const onSubmitHandler = async () => {
    try {
      console.log(form._id);
      const data = await update(form).unwrap();
      Navigate("/movielist");
    } catch (error) {
      console.log(error);
    }
  };
  const onCancelHandler = () => {
    console.log("cancel");
    Navigate("/movielist");
  };

  return (
    <ModificarMoviesUx
      form={form}
      onChangeHandler={onChangeHandler}
      onCancelHandler={onCancelHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
};
export default ModificarMovies;
