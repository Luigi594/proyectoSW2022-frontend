import {IMovieNew} from ".";

export interface ModificarMoviesUx {
  form?: IMovieNew;
  onChangeHandler: (name: string, value: string | number) => void;
  onSubmitHandler: () => void;
  onCancelHandler: () => void;
}

const UpdateMovieUx = ({
  form,
  onChangeHandler,
  onSubmitHandler,
  onCancelHandler,
}: ModificarMoviesUx) => {
  //const genero = form?.generos.split(',');
  console.log(form);
  
  return (
  <div className="flex items-center justify-center p-12">
  <div className="mx-auto w-full max-w-[550px]">
    
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="mb-5">
        <label
          //for="name"
          className="mb-3 block text-base font-medium text-[#C0C0C0]"
        >
          Titulo Pelicula
        </label>
        <input
          type="text"
          name="titulo"
          id="titulo"
          placeholder="Black Panther: Wakanda Forever"
          value={form?.titulo}
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          //for="name"
          className="mb-3 block text-base font-medium text-[#C0C0C0]"
        >
          Imagen Pelicula
        </label>
        <input
          type="text"
          name="imagen"
          id="imagen"
          value={form?.imagen}
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
          placeholder="Link Imagen"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          //for="duración"
          className="mb-3 block text-base font-medium text-[#C0C0C0]"
        >
          Duracion
        </label>
        <input
          type="text"
          name="duracion"
          id="duracion"
          value={form?.duracion}
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
          placeholder="2h 41min"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          //for="message"
          className="mb-3 block text-base font-medium text-[#C0C0C0]"
        >
          Sinopsis
        </label>
        <textarea
          //rows="4"
          name="sinopsis"
          id="sinopsis"
          value={form?.sinopsis}
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
          placeholder="Ingrese la sinopsis de la pelicula"
          className="w-full resize-none rounded-md border border-[#C0C0C0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>

      <div className="mb-5">
        <label
        //for="Genero"
        className="mb-3 block text-base font-medium text-[#C0C0C0]"
        >
          Genero
        </label>
        <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="generos" 
        name="generos" defaultValue={form?.generos}
        onChange={(e) => {
          onChangeHandler(e.target.name, e.target.value);
        }}>
          <option >Eligir un genero</option>
          <option value="Terror">Terror</option>
          <option value="Comedia">Comedia</option>
          <option value="Romance">Romance</option>
          <option value="Misterio">Misterio</option>
          <option value="Crimen">Crimen</option>
          
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>

      <div className="mb-5">
        <label
        //for="rating"
        className="mb-3 block text-base font-medium text-[#C0C0C0]"
        >
          Rating
        </label>
        <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="rating" name="rating" defaultValue={form?.rating}
        onChange={(e) => {
          onChangeHandler(e.target.name, e.target.value);
        }}>
          <option>Elegir Rating</option>
          <option value="G">G</option>
          <option value="PG">PG</option>
          <option value="PG-13">PG-13</option>
          <option value="R">R</option>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>

      <div className="mb-5">
        <label
          //for="fecha_lanzamiento"
          className="mb-3 block text-base font-medium text-[#C0C0C0]"
        >
          Fecha Lanzamiento
        </label>
        <input
          type="date"
          name="fecha_lanzamiento"
          id="fecha_lanzamiento"
          value={String(form?.fecha_lanzamiento)}
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          //for="director"
          className="mb-3 block text-base font-medium text-[#C0C0C0]"
        >
          Director
        </label>
        <input
          type="text"
          name="director"
          id="director"
          value={form?.director}
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
          //placeholder="Ryan Coogler"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          //for="actores"
          className="mb-3 block text-base font-medium text-[#C0C0C0]"
        >
          Actores
        </label>
        <textarea
          //rows="4"
          name="actores"
          id="actores"
          value={form?.actores}
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
          placeholder="Chadwick Boseman, Letitia Wright, Michael Jordan"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>

      <div className="mb-5">
        <label
          //for="guest"
          className="mb-3 block text-base font-medium text-[#C0C0C0]"
        >
          Puntuacion General de la pelicula
        </label>
        <input
          type="number"
          name="puntuaciones"
          id="puntuaciones"
          value={String(form?.puntuaciones)}
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
          placeholder="5"
          min="0"
          max="10"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          //for="trailes"
          className="mb-3 block text-base font-medium text-[#C0C0C0]"
        >
          Trailer
        </label>
        <input
          type="text"
          name="trailer"
          id="trailer"
          value={form?.trailer}
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
          placeholder="Link Trailes"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
        //for="status"
        className="mb-3 block text-base font-medium text-[#C0C0C0]"
        >
          Estado del trailer
        </label>
        <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
         id="estado" name="estado"  defaultValue={form?.status}
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}>
          <option>Elegir estado</option>
          <option value="ACT">ACT</option>
          <option value="INA">INA</option>
          <option value="BLQ">BLQ</option>
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
      <div className="mb-5">
        <button onClick={(e)=>{
          onCancelHandler();
        }}className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">Cancelar</button>
      </div>
    </form>
  </div>
</div>
  );
};

export default UpdateMovieUx;