import { BiCameraMovie } from "react-icons/bi";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className="min-h-[80vh] max-w-full p-10 grid place-content-center mt-auto">
      <div className="flex items-center space-x-4">
        <BiCameraMovie size={"10rem"} className="text-gray-300" />
        <h1 className="text-4xl font-bold text-slate-200">Not Found</h1>
        <BiCameraMovie size={"10rem"} className="text-gray-300" />
      </div>
    </div>
  );
}
