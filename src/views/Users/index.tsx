import { useAllUsersQuery } from "@store/Services/Users";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import UserUx from "./UsersUx";


const User= () => {
    const [page, setPage]= useState(1); 
    const [limit, setLimit]= useState(4); 
    const [showMyModal, setShowMyModal]= useState(false);
    const changePageLimit= (p:number, l:number)=> {
        setPage(p); 
        setLimit(l);
    };

    const {data, isLoading, error}= useAllUsersQuery({
        page, 
        items:limit
    },{refetchOnMountOrArgChange: true, refetchOnFocus: true});

    const Navigate= useNavigate();
    return (
        <UserUx
        error= {error}
        data= {data}
        isLoading= {isLoading}
        changePageLimit= {changePageLimit}
        viewDetailClick= {(id)=> {Navigate(`/userDashboard/detail/${id}`)}}
        viewUpdateClick= {(id) => {Navigate(`/userDashboard/update/${id}`)}}
        showMyModal= {showMyModal}
        setShowMyModal= {setShowMyModal}
    />
    )

}

export default User; 