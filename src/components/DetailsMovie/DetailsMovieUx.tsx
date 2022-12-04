import { IPeliculas, IPeliculasResponse } from "@store/Services/PeliculasHome";
import { HiStar, HiOutlineHeart, HiInformationCircle } from "react-icons/hi2";

interface Props {
  error?: any;
  data?: IPeliculasResponse;
  isLoading?: boolean;
  changeLimitItems?: (page: number, limit: number) => void;
  viewDetailMovie?: (id: string) => void;
}

function DetailsMovieUx({
  error,
  data,
  isLoading,
  changeLimitItems = (page, limit) => {},
  viewDetailMovie = (id) => {},
}: Props) {
  // funcion para truncar texto
  const truncarText = (texto: string, numeroTruncar: number) => {
    if (texto.length <= numeroTruncar) {
      return texto;
    }

    return texto.slice(0, numeroTruncar) + "...";
  };

  return (
    <div className="w-full">
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <section className="bg-gray-800 dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-slate-300 text-4xl font-semibold border-l-4 border-l-sky-600">
                    <span className="ml-1">Titulo de la Pelicula</span>
                </h1>
                <h3 className="text-3xl font-semibold text-white capitalize lg:text-2xl dark:text-white text-right">(Icon) Puntaje: ? / 10</h3>

                <div className="grid grid-cols-2 lg:-mx-6 lg:flex lg:items-center">
                    <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-lg h-72 lg:h-96 shadow-sm shadow-sky-400" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""></img>

                    <div className="mt-5 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                        <p className="text-sm text-blue-500 uppercase">Sinopsis</p>
                        <p className="mb-3 text-sm text-white dark:text-gray-300 md:text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                            laudantium quia tempore delect
                        </p>

                        <p className="text-sm text-blue-500 uppercase">Duracion</p>
                        <p className="mb-3 text-sm text-white dark:text-gray-300 md:text-sm">
                            2h 10m
                        </p>

                        <p className="text-sm text-blue-500 uppercase">Genero</p>
                        <p className="mb-3 text-sm text-white dark:text-gray-300 md:text-sm">
                            Comedia
                        </p>

                        <p className="text-sm text-blue-500 uppercase">Rating</p>
                        <p className="mb-3 text-sm text-white dark:text-gray-300 md:text-sm">
                            R
                        </p>

                    </div>
                </div>
                <div className="flex items-center justify-between mt-6 mb-3">
                    <div className="">
                        <h1 className="text-sm text-blue-500 uppercase">Fecha de Lanzamiento</h1>
                        <p className="text-sm text-white dark:text-gray-400">2022-05-10</p>
                    </div>
                    <div className="">
                        <h1 className="text-sm text-blue-500 uppercase">Director</h1>
                        <p className="text-sm text-white dark:text-gray-400">Eduardo Aguirre</p>
                    </div>
                    <div className="">
                        <h1 className="text-sm text-blue-500 uppercase">Actores</h1>
                        <p className="text-sm text-white dark:text-gray-400">Ninguno</p>
                    </div>
                </div>
                <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white mt-5 mb-3 text-center">Trailer</h1>
                <div className="flex justify-center mt-6 mb-3">
                    <iframe className="shadow-sm shadow-sky-400" width="854" height="480" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
        </section>
      </div>

    </div>
  );
}

export default DetailsMovieUx;
