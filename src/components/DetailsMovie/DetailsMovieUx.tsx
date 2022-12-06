import ReactPlayer from 'react-player/lazy';
import { IPeliculas } from "@store/Services/PeliculasHome";
import { HiStar, HiTicket, HiPlay } from "react-icons/hi2";

export interface IDetailsMovieUx {
  error?: any;
  data?: IPeliculas;
  isLoading?: boolean;
}

const DetailsMovieUx = ({ data, isLoading, error }: IDetailsMovieUx) => {
  return (
    
        <div className="mt-12 grid grid-cols-1 gap-6">
            <div className="w-full bg-gray-800 dark:bg-gray-900 rounded-lg">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-slate-300 text-4xl font-semibold border-l-4 border-l-sky-600">
                        <span className="ml-3">{data?.titulo}</span>
                    </h1>

                    <div className="flex items-end justify-end">
                        <HiStar className="w-9 h-9 text-yellow-400 mr-3" />
                        <h1 className="text-3xl font-semibold text-white capitalize dark:text-white">  Puntaje: {data?.puntuaciones} / 10</h1>
                    </div>

                    <div className="grid grid-cols-2 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-contain w-full lg:mx-6 lg:w-1/2 rounded-lg h-72 lg:h-96 shadow-lg shadow-sky-400 hover:scale-110 transition duration-300 ease-in-out" src={data?.imagen} alt="pelicula"></img>

                        <div className="mt-5 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="text-lg text-blue-500 uppercase">Sinopsis</p>
                            <p className="mb-3 text-lg text-white dark:text-gray-300">
                                {data?.sinopsis}
                            </p>

                            <p className="text-lg text-blue-500 uppercase">Duracion</p>
                            <p className="mb-3 text-lg text-white dark:text-gray-300">
                                {data?.duracion}
                            </p>

                            <p className="text-lg text-blue-500 uppercase">Genero</p>
                            <p className="mb-3 text-lg text-white dark:text-gray-300">
                                {data?.generos} 
                            </p>

                            <p className="text-lg text-blue-500 uppercase">Rating</p>
                            <p className="mb-3 text-lg text-white dark:text-gray-300">
                                {data?.rating}
                            </p>

                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6 mb-3">
                        <div className="">
                            <h1 className="text-lg text-blue-500 uppercase">Fecha de Lanzamiento</h1>
                            <p className="text-lg text-white dark:text-gray-400">{data?.fecha_lanzamiento}</p>
                        </div>
                        <div className="">
                            <h1 className="text-lg text-blue-500 uppercase">Director</h1>
                            <p className="text-lg text-white dark:text-gray-400">{data?.director}</p>
                        </div>
                        <div className="">
                            <h1 className="text-lg text-blue-500 uppercase">Actores</h1>
                            <p className="text-lg text-white dark:text-gray-400">{data?.actores}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <HiPlay className="w-10 h-10 text-sky-400 mr-3" />
                        <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white mt-5 mb-3 text-center">Trailer</h1>
                    </div>
                    
                    <div className="flex h-[600px] justify-center mt-6 mb-3 shadow-lg shadow-sky-400">
                        <ReactPlayer url={data?.trailer} controls={true} width='100%' height='100%' className='react-player'/>
                    </div>
                </div>
            </div>
        </div>
  );
  }

export default DetailsMovieUx;
