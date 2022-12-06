
import FloatingInput  from '@components/inputFloating';
import { IUser } from '@store/Services/Users';
import InputSelect from '@components/Select';
import { IuserDetail } from '.';



export interface IUserDetailUx {
    form?: IuserDetail;
    onReturnClick: () => void;
  }




const UserDetailUx = ({
   form,
   onReturnClick
}: IUserDetailUx) => {  
   
    return (
        <div className='min-h-screen flex justify-center   items-center bg-gradient-to-br from-purple-600 to-blue-500 '>
            <div className=' flex flex-col -mt-20 pb-5  translate-y-8  bg-white rounded-lg border border-green-200 shadow-lg shadow-green-300  '>
            <h3 className='m-4 text-center text-dark font-medium rounded-lg text-base'> Detail</h3>
            <div className='flex flex-row'>
            <FloatingInput
                    name='name'
                    labelText='Name'
                    value={form?.name}
                    type= 'text'
                    readOnly={true}
                    disabled={true}
                />

            <FloatingInput
                    name="username"
                    labelText='Username'
                    value= {form?.username}
                    type= 'text'
                    readOnly={true}
                    disabled={true}
                />
            </div>

           <FloatingInput
                    name="email"
                    labelText='Email'
                    value= {form?.email}
                    type= 'email'
                    readOnly={true}
                    disabled={true}
                />
               
                <InputSelect  
                    name="type"
                    labelText="Estado"
                    value={form?.status}
                    options={[
                        { value: "ACT", text: "Activo" },
                        { value: "INA", text: "Inactivo" },
                    ]}
                    disabled={true}
                />
               

            
           <button 
           onClick={ async (e) => {
            e.preventDefault();
            e.stopPropagation();
            onReturnClick();
        }}
           className="text-white place-self-end bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Regresar</button>
            </div>
            </div>
    )
}

export default UserDetailUx; 
