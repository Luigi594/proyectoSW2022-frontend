import AgregarMovieUx from "./AgregarMoviesUx";
import { useNewMovieMutation, INewMovie } from "@store/Services/agregarPeliculas";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieNew = () => {
  const Navigate = useNavigate();

  const [form, setForm] = useState<INewMovie>({
    imagen:"",
    titulo: "",
    duracion: "",
    sinopsis: "",
    generos: "Terror",
    rating: "G",
    fecha_lanzamiento: new Date(),
    director: "",
    actores: "",
    puntuaciones: 0, // Rating de Usuarios
    trailer: "", // Link de YT
    status: "ACT",
  });
  const [newMovie, { isLoading, error }] = useNewMovieMutation();
  
  const onChangeHandler = (name:string, value:string|number) => {
    setForm({ ...form, [name]: value });
  }
  const onSubmitHandler = async () => {
    try {
      const data = await newMovie(form).unwrap();
      console.log(data);
      Navigate("/movie");
    } catch (error) {
      console.log(error);
    }
  }
  const onCancelHandler = () => {
    console.log('cancel');
    Navigate("/movie");
  }
  return (
    <AgregarMovieUx
      form={form}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
      onCancelHandler={onCancelHandler}
    />
  );
};
export default MovieNew;