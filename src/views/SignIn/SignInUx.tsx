
import FloatingInput  from '@components/inputFloating';
import e from 'express';
import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
    error: any,
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
        <div className=' flex justify-center items-center'>
            <form>
            <div className=' flex flex-col mt-10'>
                <h3>Sign In</h3>
               
                <FloatingInput
                    name="name"
                    labelText='Name'
                    value= {name}
                    onChange= {(e) => setName(e.target.value)}
                    type= 'text'
                />
                  <FloatingInput
                    name="email"
                    labelText='Email'
                    value= {email}
                    onChange= {(e) => setEmail(e.target.value)}
                    type= 'email'
                />
               
                <FloatingInput
                    name="username"
                    labelText='Username'
                    value= {username}
                    onChange= {(e) => setUsername(e.target.value)}
                    type= 'text'
                />
                 <div className='flex flex-row'>
                 <FloatingInput
                    name="Password"
                    labelText='Password'
                    value= {password}
                    onChange= {(e) => setPassword(e.target.value)}
                    type= 'password'
                />
                 <FloatingInput
                    name="Confirm Password"
                    labelText='Confirm Password'
                    value= {passwordConfirm}
                    onChange= {(e) => setPasswordConfirm(e.target.value)}
                    type= 'password'
                />
                 </div>
                <FloatingInput
                    name="date"
                    labelText="Fecha"
                    value={birthDate}
                    type= "date"
                    onChange={(e) => setBirthDate(e.target.value)}
                    />
           
                <button className='place-self-end' onClick={ async (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleClick();
                }}>Probar</button>
            </div>
            </form>
            </div>
    )
}

export default SignInUx; 





