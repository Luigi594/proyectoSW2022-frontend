import { useByIdQuery} from "@store/Services/Users";
import { useNavigate, useParams } from "react-router-dom";
import UserDetailUx from "./UsersDetailUx";



const UserUpdate= () => {
    
    const Navigate= useNavigate();
    const { id }= useParams();
    const {data, isLoading, error}= useByIdQuery(id as string);
    return (
        <UserDetailUx
            form={data}
            error={error}
            isLoading={isLoading}
            onReturnClick={()=> {Navigate("/userDashboard")}}
        />

    )
}

export default UserUpdate;