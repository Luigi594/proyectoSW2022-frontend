
import FloatingInput  from '@components/inputFloating';
import { IUser } from '@store/Services/Users';
import InputSelect from '@components/Select';




export interface IUserDetailUx {
    error: any;
    form: IUser;
    isLoading: boolean;
    onReturnClick: () => void;
  }




const UserDetailUx = ({
   isLoading, 
   error, 
   form,
   onReturnClick
}: IUserDetailUx) => {  
   
    return (
        <div className='z-40 min-h-screen flex justify-center  -translate-y-6 items-center bg-gradient-to-br from-purple-600 to-blue-500 '>
            {isLoading && <div>Loading...</div>}
            <form>
            <div className=' z-30 flex flex-col -mt-20 pb-5  translate-y-8  bg-white rounded-lg border border-green-200 shadow-lg shadow-green-300  '>
                <h3 className='m-4 text-center text-dark font-medium rounded-lg text-base'> Detail</h3>
                <div className='flex flex-row'>
                <FloatingInput
                    name="name"
                    labelText='Name'
                    value= {form.name}
                    error= {error}
                    type= 'text'
                    readOnly={true}
                    disabled={true}
                />

                <FloatingInput
                    name="username"
                    labelText='Username'
                    value= {form.username}
                    error={error}
                    type= 'text'
                    readOnly={true}
                    disabled={true}
                />
               </div> 

            
                  <FloatingInput
                    name="email"
                    labelText='Email'
                    value= {form.email}
                    error={error}
                    type= 'email'
                    readOnly={true}
                    disabled={true}
                />
               
                <InputSelect selected={form.status} disabled={true} />
                <h5 className='text-sm text-gray-500 dark:text-gray-400 mb-2 ml-4'>Roles</h5>
                <ul className="mx-4 mb-4 w-48 text-sm text-gray-500 dark:text-gray-400 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                   {
                      form.roles.map((o)=> {
                        return (
                            <li key={o} className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">{o}</li>
                       
                        )
                      })
                   }
                   
                </ul>

                
           
           <button 
           onClick={ async (e) => {
            e.preventDefault();
            e.stopPropagation();
            onReturnClick();
        }}
           className="text-white place-self-end bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Regresar</button>
            </div>
            </form>
            </div>
    )
}

export default UserDetailUx; 



