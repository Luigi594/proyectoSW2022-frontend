
import { useState } from 'react'
import SigninUx from './SignInUx'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSecData} from '@store/Slices/secSlice';
import { useSigninMutation } from '@store/Services/Security';


const Signin = () => {
  
    const [signin, {isLoading, error, status, ...mustRest}]= useSigninMutation();
    const dispatch= useDispatch();
    const Navigator= useNavigate();
    const [email, setEmail]= useState(""); 
    const [name, setName]= useState(""); 
    const [username, setUsername]= useState(""); 
    const [password, setPassword]= useState("");
    const [passwordConfirm, setPasswordConfirm]= useState("");
    const [birthDate, setbirthDate] = useState("");
    

    const handleClick= async ()  => {
       const data= await signin({email, name, username, password, birthDate}).unwrap();
        console.log(data);
        dispatch(setSecData(data));
        Navigator("/");
    }

    return (
        <SigninUx
            name={name}
            setName= {setName}
            email={email}
            setEmail= {setEmail}
            username= {username}
            setUsername= {setUsername}
            password= {password}
            setPassword= {setPassword}
            passwordConfirm= {passwordConfirm}
            setPasswordConfirm={setPasswordConfirm}
            birthDate= {birthDate}
            setBirthDate= {setbirthDate}
            error= {error}
            handleClick= {handleClick}
        />
    );
}

export default Signin;