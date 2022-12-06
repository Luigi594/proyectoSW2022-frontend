import FloatingInput from "@components/inputFloating";
import InputSelect from "@components/Select";
import { IUserNew } from ".";

export interface IUserNewUx {
  form?: IUserNew;
  onChangeHandler: (name: string, value: string | number) => void;
  onSubmitHandler: () => void;
  onCancelHandler: () => void;
  error: any;
}

export interface IError {
  value: string;
  msg: string;
  param: string;
  location: string;
}

const UsersUpdateUx = ({
  form,
  onChangeHandler,
  onSubmitHandler,
  onCancelHandler,
  error,
}: IUserNewUx) => {
  if (error == undefined) {
    error = [];
  }

  return (
    <div className=" min-h-screen flex justify-center   items-center bg-gradient-to-br from-purple-600 to-blue-500 ">
      <div className=" z-30 flex flex-col -mt-14 pb-5 p-5    bg-white rounded-lg border border-green-200 shadow-lg shadow-green-300">
        <h3 className="m-4 text-center text-dark font-medium rounded-lg text-base">
          Update User
        </h3>
        <FloatingInput
          name="email"
          labelText="Email"
          value={form?.email}
          type="email"
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
        />
        {error.data?.errors.map((o: IError) => {
          if (o.param == "email") {
            return (
              <p className="-mt-2 mb-2 ml-5 text-xs text-red-600 dark:text-red-500">
                {o.msg}
              </p>
            );
          }
        })}

        <FloatingInput
          name="username"
          labelText="Username"
          value={form?.username}
          type="text"
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
        />

        {error.data?.errors.map((o: IError) => {
          if (o.param == "username") {
            return (
              <p className="-mt-2 mb-2 ml-5 text-xs text-red-600 dark:text-red-500">
                {o.msg}
              </p>
            );
          }
        })}

        <InputSelect
          name="status"
          labelText="Estado"
          value={form?.status}
          options={[
            { value: "INA", text: "Inactivo" },
            { value: "ACT", text: "Activo" },
          ]}
          disabled={false}
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
        />

        {error.data?.errors.map((o: IError) => {
          if (o.param == "status") {
            return (
              <p className="-mt-2 mb-2 ml-5 text-xs text-red-600 dark:text-red-500">
                {o.msg}
              </p>
            );
          }
        })}

        <div className="flex flex-row m-5 items-center space-x-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSubmitHandler();
            }}
            className="text-white place-self-end bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {" "}
            Actualizar{" "}
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCancelHandler();
            }}
            className="text-white place-self-end bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersUpdateUx;
