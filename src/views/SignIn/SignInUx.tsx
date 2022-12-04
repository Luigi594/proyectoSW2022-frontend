
import FloatingInput  from '@components/inputFloating';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import e from 'express';
import { useState } from 'react';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
import { json } from 'stream/consumers';
/*export interface IError {
    value: string,
    msg: string,
    param: string,
    location: string
}*/
export interface IloginUxProps {
    name: string, 
    setName: (name: string) => void,
    email: string, 
    setEmail: (email: string) => void, 
    username: string, 
    setUsername: (username: string) => void
    password: string, 
    setPassword: (password: string) => void,
    passwordConfirm: string, 
    setPasswordConfirm: (password: string) => void,
    birthDate: string,
    setBirthDate: (birthDate: string)=> void,
    error?: any,
    handleClick: () => void
}






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
    handleClick
}: IloginUxProps) => {


    
    return (
        <div className='z-40 max-h-screen flex justify-center  -translate-y-6 items-center bg-gradient-to-br from-purple-600 to-blue-500 '>
            
            <form>
            <div className=' z-30 flex flex-col mt-10 pb-15  translate-y-8  bg-white rounded-lg border border-green-200 shadow-lg shadow-green-300  '>
                <h3 className='m-4 text-center text-dark font-medium rounded-lg text-base'>Sign In</h3>

                <FloatingInput
                    name="name"
                    labelText='Name'
                    value= {name}
                    error= {error}
                    onChange= {(e) => setName(e.target.value)}
                    type= 'text'
                />
            
                  <FloatingInput
                    name="email"
                    labelText='Email'
                    value= {email}
                    error={error}
                    onChange= {(e) => setEmail(e.target.value)}
                    type= 'email'
                />

                {
                    
                }
               
                <FloatingInput
                    name="username"
                    labelText='Username'
                    value= {username}
                    error={error}
                    onChange= {(e) => setUsername(e.target.value)}
                    type= 'text'
                />
                 <div className='flex flex-row'>
                 <FloatingInput
                    name="Password"
                    labelText='Password'
                    value= {password}
                    error={error}
                    onChange= {(e) => setPassword(e.target.value)}
                    type= 'password'
                />
                 <FloatingInput
                    name="Confirm Password"
                    labelText='Confirm Password'
                    value= {passwordConfirm}
                    error={error}
                    onChange= {(e) => setPasswordConfirm(e.target.value)}
                    type= 'password'
                />
                 </div>
                <FloatingInput
                    name="date"
                    labelText="Fecha"
                    value={birthDate}
                    type= "date"
                    error={error}
                    onChange={(e) => setBirthDate(e.target.value)}
                    />
           
           <button 
           onClick={ async (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleClick();
        }}
           className="text-white place-self-end bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign In</button>
            </div>
            </form>
            </div>
    )
}

export default SignInUx; 





