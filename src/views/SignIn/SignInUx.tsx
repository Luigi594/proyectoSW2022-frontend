import FloatingInput from "@components/inputFloating";
import { IError } from "@views/UsersUpdate/UsersUpdateUx";

import "react-datepicker/dist/react-datepicker.css";

export interface IloginUxProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  passwordConfirm: string;
  setPasswordConfirm: (password: string) => void;
  birthDate: string;
  setBirthDate: (birthDate: string) => void;
  error?: any;
  handleClick: () => void;
}

const InvalidatePass = (result: boolean) => {
  if (result == false) {
    return (
      <p className="-mt-2 mb-2 ml-5 text-xs text-red-600 dark:text-red-500">
        Contraseñas no coinciden
      </p>
    );
  }
};

const SignInUx = ({
  name,
  setName,
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  passwordConfirm,
  setPasswordConfirm,
  birthDate,
  setBirthDate,
  error,
  handleClick,
}: IloginUxProps) => {
  let result = true;
  if (error == undefined) {
    error = [];
  }

  if (password != passwordConfirm) {
    result = false;
  }

  return (
    <div className="z-40 max-h-screen flex justify-center  -translate-y-6 items-center bg-gradient-to-br from-purple-600 to-blue-500 ">
      <form>
        <div className=" z-30 flex flex-col mt-10 pb-15  translate-y-8  bg-white rounded-lg border border-green-200 shadow-lg shadow-green-300  ">
          <h3 className="m-4 text-center text-dark font-medium rounded-lg text-base">
            Sign In
          </h3>

          <FloatingInput
            name="name"
            labelText="Name"
            value={name}
            error={error}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          {error.data?.errors.map((o: IError) => {
            if (o.param == "name") {
              return (
                <p className="-mt-2 mb-2 ml-5 text-xs text-red-600 dark:text-red-500">
                  {o.msg}
                </p>
              );
            }
          })}

          <FloatingInput
            name="email"
            labelText="Email"
            value={email}
            error={error}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
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
            value={username}
            error={error}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
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

          <div className="flex flex-row">
            <div className="flex flex-col">
              <FloatingInput
                name="Password"
                labelText="Password"
                value={password}
                error={error}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />

              {error.data?.errors.map((o: IError) => {
                if (o.param == "password") {
                  return (
                    <p className="-mt-2 mb-2 ml-5 text-xs text-red-600 dark:text-red-500">
                      {o.msg}
                    </p>
                  );
                }
              })}
            </div>

            <div className="flex flex-col">
              <FloatingInput
                name="Confirm Password"
                labelText="Confirm Password"
                value={passwordConfirm}
                error={error}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                type="password"
              />
              {InvalidatePass(result)}
            </div>
          </div>
          <FloatingInput
            name="date"
            labelText="Fecha"
            value={birthDate}
            type="date"
            error={error}
            onChange={(e) => setBirthDate(e.target.value)}
          />

          <button
            onClick={async (e) => {
              e.preventDefault();
              e.stopPropagation();
              if (result == true) {
                handleClick();
              }
            }}
            className="text-white place-self-end bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInUx;
