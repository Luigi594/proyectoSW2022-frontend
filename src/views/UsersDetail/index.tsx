import { useByIdQuery} from "@store/Services/Users";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserDetailUx from "./UsersDetailUx";

export interface IuserDetail {
    id: string, 
    email: string,
    username: string, 
    status: string,
    name: string
}


const UserUDetail= ()=> {
    
    const Navigate= useNavigate();
    const { id }= useParams();
    const {data, isLoading, error}= useByIdQuery(id as string);

    return (
        <UserDetailUx
            form={data}
            onReturnClick={()=> {Navigate("/userDashboard")}}
        />

    )
}

export default UserUDetail;