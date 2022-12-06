import { useGetAllMoviesQuery } from "@store/Services/PeliculasHome";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import MovieListUx from "./MovieListUx";

function MovieList() {
  const [page, setPage] = useState(1);
  const [onClick, setOnClick] = useState(false);

  const onPageChange = (pageItem: number) => {
    setPage(pageItem);
  };

  const { data, isLoading, error } = useGetAllMoviesQuery(
    {
      page,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const showModal = (valor: boolean) => {
    setOnClick(valor);
  };

  const navigate = useNavigate();

  return (
    <div className="relative justify-center p-10 mx-auto max-w-7xl">
      <h2 className="text-slate-300 text-4xl font-semibold">
        <span className="ml-1">
          Lista de peliculas -{" "}
          <span className="underline decoration-sky-600">Administrativa</span>
        </span>
      </h2>

      <div className="mt-10">
        <MovieListUx
          data={data}
          isLoading={isLoading}
          onPageChange={onPageChange}
          viewDetailMovie={(id) => {
            navigate(`/UpdateMovie/${id}`);
          }}
          deleteMovie={(id) => {
            console.log(id);
          }}
          showModal={showModal}
        />
      </div>

      {onClick && (
        <Modal
          show={onClick}
          size="md"
          popup={true}
          onClose={() => setOnClick(!onClick)}>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                ¿Está seguro que desea borrar esta película?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={() => setOnClick(false)}>
                  Sí, estoy seguro
                </Button>
                <Button color="gray" onClick={() => setOnClick(false)}>
                  Cancelar
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default MovieList;
