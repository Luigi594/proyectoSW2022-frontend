import { stringify } from "querystring";
import React from "react";
import { JSON } from "sequelize/dist";
import { arrayBuffer, json, text } from "stream/consumers";

interface IError  {
    value: string,
      msg: string,
      param: string,
      location: string
}


const FloatingInput= ({
    name = "",
    labelText = "",
    type = "text",
    value = "",
    error= "",
    onChange = (e:React.ChangeEvent<HTMLInputElement>) => { },
    ...rest
}) => {
    if(error=="") {
        return (
            <div className="relative z-0 m-3 p-2">
            <input type={type} id="default_standard" value={value} name={name} onChange= {onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor={name} className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{labelText}</label>
        </div>
        )
    } else {
        let arr= Object.values(error);
        let arrError= Object.values(arr[1]);
        console.log(arrError);
       
      
           arrError.map((x,i)=>{
            console.log(x[i]);
            let result= Object.values(x[i]);
            console.log(result[2]);
                if(result[2]== "email") {
                return (
                    <div className="relative z-0 m-3 p-2">
                    <input type={type} id="default_standard" value={value} name={name} onChange= {onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor={name} className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{labelText}</label>
                    <span key={i}>{result[1]}</span>
                    </div>
                 )
                } 

                
           })

           return (
            <div className="relative z-0 m-3 p-2">
            <input type={type} id="default_standard" value={value} name={name} onChange= {onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor={name} className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{labelText}</label>
            <span >{"Hola"}</span>
            </div>
         )

           
        
    } 
    
 
       
    
}

export default FloatingInput;