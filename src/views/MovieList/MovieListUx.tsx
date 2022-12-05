import { IPeliculas, IPeliculasResponse } from "@store/Services/PeliculasHome";
import { Table } from "flowbite-react";
import React from "react";
import { HiPencilSquare, HiTrash } from "react-icons/hi2";

interface Props {
  data?: IPeliculasResponse;
  isLoading?: boolean;
  onPageChange?: (page: number) => void;
  viewDetailMovie?: (id: string) => void;
  deleteMovie?: (id: string) => void;
}

function MovieListUx({
  data,
  isLoading,
  onPageChange = (page) => {},
  viewDetailMovie = (id) => {},
  deleteMovie = (id) => {},
}: Props) {
  const tituloTabla = [
    {
      id: 1,
      texto: "Nombre Pelicula",
    },
    {
      id: 2,
      texto: "Rating",
    },
    {
      id: 3,
      texto: "Puntuación",
    },
  ];

  return (
    <div>
      <Table hoverable={true}>
        <Table.Head>
          {tituloTabla.map((item) => (
            <Table.HeadCell key={item.id}>{item.texto}</Table.HeadCell>
          ))}

          <Table.HeadCell>
            <span>Acciones</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data &&
            data?.items.map((item: IPeliculas) => (
              <Table.Row
                key={item._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-white">
                  {item.titulo}
                </Table.Cell>

                <Table.Cell>{item.rating}</Table.Cell>

                <Table.Cell>{item.puntuaciones}</Table.Cell>

                <Table.Cell>
                  <div className="flex items-center justify-evenly">
                    <span
                      onClick={(e: React.MouseEvent<HTMLSpanElement>) =>
                        viewDetailMovie(item._id)
                      }
                      className="font-medium hover:underline text-blue-500 cursor-pointer">
                      <HiPencilSquare className="w-5 h-5" />
                    </span>

                    <span
                      onClick={(e: React.MouseEvent<HTMLSpanElement>) =>
                        deleteMovie(item._id)
                      }
                      className="font-medium hover:underline text-sky-500 cursor-pointer">
                      <HiTrash className="w-5 h-5" />
                    </span>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default MovieListUx;
