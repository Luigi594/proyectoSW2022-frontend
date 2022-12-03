import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSecData } from "@store/Slices/secSlice";
import { useLoginMutation } from "@store/Services/Security";
import { useNavigate } from "react-router-dom";

function LoginCard()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();
    const Navigator = useNavigate();
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(email, password);
        event.preventDefault();
        login({ email, password }).then((result) => {
            const data  = result;
            if ("data" in data) {
                console.log(dispatch(setSecData(data.data)));
            }
        });

    }; 


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 sm:px-6 lg:px-8">
            <div className="w-full max-w-md px-4 py-8 bg-white border-2 border-gray-300 rounded-lg shadow-md dark:bg-gray-800">
                <div className="mt-6">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">Ingresa a tu Cuenta</h2>
                    <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
                        O{' '}
                        <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
                        >
                            Registrate
                        </a>
                    </p>
                </div>
                <div className="mt-8">
                    <div className="mt-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Correo Electronico
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 dark:bg-gray-700 dark:text-gray-300"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Contraseña
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 dark:bg-gray-700 dark:text-gray-300"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"       
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Ingresar
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center justify-center mt-6">
                            <span className="w-px h-5 bg-gray-300 dark:bg-gray-600" aria-hidden="true" />
                            <a
                                href="http://localhost:3000/sentEmail"
                                className="block px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300"
                            >
                                ¿Olvidaste tu contraseña?
                            </a>
                            <span className="w-px h-5 bg-gray-300 dark:bg-gray-600" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginCard;