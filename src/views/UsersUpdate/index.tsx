import { useByIdQuery, useUpdateMutation} from "@store/Services/Users";
import { IuserDetail } from "@views/UsersDetail";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { idText } from "typescript";
import UsersUpdateUx from "./UsersUpdateUx";

export interface IUserNew {
    id: string, 
    email: string,
    username: string, 
    status: string
}



const UserUpdate= () => {
    
    const Navigate= useNavigate();
    
    const { id }= useParams();
    const { data }= useByIdQuery(id as string);
  

    const [form, setForm] = useState<IUserNew> ({
                id: data?._id as string, 
                email: data?.email as string,
                username: data?.username as string,
                status: data?.status as string
        })

        
    const[update ,{isLoading, error}]= useUpdateMutation();

    const onChangeHandler = (name:string, value:string | number) => {
      console.log(value);
      setForm({ ...form, [name]: value });
      console.log(form.status);
      }



      const onSubmitHandler = async () => {
        try {
          const data = await update(form).unwrap();
          console.log(data);
          Navigate("/userDashboard");
        } catch (error) {
          console.log(error);
        }
      }

      const onCancelHandler = () => {
        console.log('cancel');
        Navigate("/userDashboard");
      }

    return (
        <UsersUpdateUx
          form={form}
          onChangeHandler={onChangeHandler}
          onCancelHandler= {onCancelHandler}
          onSubmitHandler= {onSubmitHandler}
          error={error}
        />

    )
}

export default UserUpdate;