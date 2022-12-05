
import { IUser } from '@store/Services/Users'
import  Pagining from '@components/Pagination/index'
import imgUser from './user.png';
import { CardUser } from '@components/CardUser/cardUser';
import SearchInput from '@components/Input/search';
import MyModal from '@components/Modal/index';
import { isTypeNode, VoidExpression } from 'typescript';
import { info } from 'console';
import { isUpsertQuery } from '@reduxjs/toolkit/dist/query/core/buildInitiate';

interface IUsersUxProps {
    error?: any;
    data?: any;
    isLoading?: boolean;
    changePageLimit?: (page: number, limit: number)=>void;
    viewDetailClick?: (id:string)=> void;
    showMyModal: boolean;
     setShowMyModal: ((showMyModal: boolean) => void)
}

/*const cardModal= (item:IUser, visible: boolean, setVisible: (visible: boolean)=> void) => {
    return (
        <MyModal
            key={item._id}
            visible= {visible}
            setVisible={setVisible}
            item= {item}
        ></MyModal>
    )
}*/

const UserUx= ({
    error, 
    data, 
    isLoading, 
    changePageLimit= (p,l)=>{console.log("PG", {p,l})},
    viewDetailClick= (id) => {},
    showMyModal ,
    setShowMyModal,
}: IUsersUxProps) => {
    return (
    <div className='min-h-screen flex flex-col bg-slate-600'>
        <div><h3 className='text-3xl font-extrabold text-center mt-5 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>Users Dashboard </h3></div>
        <div className='space-x-6 m-2 justify-center '>
            <SearchInput/>
        </div>
       <section className='flex flex-row space-x-6 m-2 flex-wrap justify-center'>
       {isLoading && <div>Loading...</div>}
       {error}
       {data && data.items.map((o:IUser)=>{
            return (
               CardUser(o, viewDetailClick, setShowMyModal, showMyModal)
            )
       })}
       </section>
       <div className='place-self-end fixed bottom-0 right-0'>
       <Pagining
        currentPage={data?.page || 1}
        totalPages={data?.totalPages || 0}
        pageLimit={data?.itemsPerPage || 10}
        onPageChange= {(page) => {
            console.log(page);
            changePageLimit(page, data?.itemsPerPage || 10);
        }}
       />
       </div>
    </div>
    )
}

export default UserUx;