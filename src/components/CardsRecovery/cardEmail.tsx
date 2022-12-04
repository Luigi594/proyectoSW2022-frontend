import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSecData } from '@store/Slices/secSlice';
import { useSentMutation } from '@store/Services/Security';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function SentEmailCard()
{
    const [email, setEmail] = useState('');
    const [sent, { isLoading }] = useSentMutation();
    const dispatch = useDispatch();
    const Navigator = useNavigate();

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(email);
        event.preventDefault();
        const pin = Math.floor(Math.random() * 1000000);
        sent({ email, pin }).then((result) => {
            const data  = result;
            if ("data" in data) {
                console.log(dispatch(setSecData(data.data)));
                localStorage.setItem('email', email);
                localStorage.setItem('pin', pin.toString());
                Swal.fire({
                    title: "Excelente!",
                    text: "Te hemos enviado un correo con un código de verificación",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Navigator('/verifyPin');
                    }
                });
            }
            else
            {
                Swal.fire({
                    title: "Error!",
                    text: "Verifique los datos ingresados",
                    icon: "error",
                    confirmButtonText: "Aceptar",
                })
            }
        });

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 sm:px-6 lg:px-8">
            <div className="w-full max-w-md px-4 py-8 bg-white border-2 border-gray-300 rounded-lg shadow-md dark:bg-gray-800">
                <div className="mt-6">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">Recuperacion de Cuenta</h2>
                    <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
                        <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
                        >
                            Completa los datos
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
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700"
                                        onChange={handleEmailChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    {isLoading ? 'Enviando...' : 'Enviar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SentEmailCard;