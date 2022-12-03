import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VerifyPin()
{
    const [pin, setPin] = useState('');
    const Navigator = useNavigate();

    const handlePinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPin(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(pin);
        event.preventDefault();
        const pinEnviado = localStorage.getItem('pin');
        if (pinEnviado === pin) {
            console.log('Correcto');
            Navigator('/changePassword');
        } else {
            console.log('Incorrecto');
        }
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
                            Ingresa el Pin enviado a tu correo electronico
                        </a>
                    </p>
                </div>
                <div className="mt-8">
                    <div className="mt-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="pin" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    PIN
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="pin"
                                        name="pin"
                                        type="number"
                                        autoComplete="pin"
                                        required
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700"
                                        onChange={handlePinChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerifyPin;