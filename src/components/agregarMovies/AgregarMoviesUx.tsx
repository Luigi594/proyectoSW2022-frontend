import { INewMovie } from "@store/Services/agregarPeliculas";
export interface AgregarMoviesUx {
  form: INewMovie;
  onChangeHandler: (name: string, value: string | number) => void;
  onSubmitHandler: () => void;
  onCancelHandler: () => void;
}
const AgregarMoviesUx = ({
  form,
  onChangeHandler,
  onSubmitHandler,
  onCancelHandler,
}: AgregarMoviesUx) => {
  return (
  <div className="flex items-center justify-center p-12">
        
  <div className="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="mb-5">
        <label
          //for="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Titulo Pelicula
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Black Panther: Wakanda Forever"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          //for="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Imagen Pelicula
        </label>
        <input
          type="text"
          name="imagen"
          id="imagen"
          placeholder="Link Imagen"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          //for="duración"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Duracion
        </label>
        <input
          type="text"
          name="duracion"
          id="duracion"
          placeholder="2h 41min"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          //for="message"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Sinopsis
        </label>
        <textarea
          //rows="4"
          name="message"
          id="message"
          placeholder="Ingrese la sinopsis de la pelicula"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>

      <div className="mb-5">
        <label
        //for="Genero"
        className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Genero
        </label>
        <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>Eligir un genero</option>
          <option>Terror</option>
          <option>Comedia</option>
          <option>Romance</option>
          <option>Misterio</option>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>

      <div className="mb-5">
        <label
        //for="rating"
        className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Rating
        </label>
        <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>Elegir Rating</option>
          <option>G</option>
          <option>PG</option>
          <option>PG-13</option>
          <option>R</option>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>

      <div className="mb-5">
        <label
          //for="fecha_lanzamiento"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Fecha Lanzamiento
        </label>
        <input
          type="datetime-local"
          name="fecha_lanzamiento"
          id="fecha_lanzamiento"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          //for="director"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Director
        </label>
        <input
          type="text"
          name="director"
          id="director"
          placeholder="Ryan Coogler"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          //for="actores"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Actores
        </label>
        <textarea
          //rows="4"
          name="Actores"
          id="Actores"
          placeholder="Chadwick Boseman, Letitia Wright, Michael Jordan"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>

      <div className="mb-5">
        <label
          //for="guest"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Puntuacion General de la pelicula
        </label>
        <input
          type="number"
          name="guest"
          id="guest"
          placeholder="5"
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          //for="trailes"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Trailer
        </label>
        <input
          type="text"
          name="trailes"
          id="trailer"
          placeholder="Link Trailes"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
        //for="status"
        className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Estado del trailer
        </label>
        <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>Elegir estado</option>
          <option>ACT</option>
          <option>INA</option>
          <option>BLQ</option>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>

      <div className="mb-5">
        <button onClick={(e)=>{
          e.preventDefault();
          e.stopPropagation();
          onSubmitHandler();
        }}className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">Guardar</button>
      </div>
    </form>
  </div>
</div>
  );
};

export default AgregarMoviesUx;