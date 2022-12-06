import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export interface IUser{
    _id: string,
    name: string, 
    email: string,
    username: string,
    status: string,
    roles: []
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery(
      {
        baseUrl: `${process.env.REACT_APP_API_BASE_URL}/security`,
        prepareHeaders: (headers) => {
          headers.set('apikey', process.env.REACT_APP_API_KEY as string)
        }
      }
    ),
    tagTypes: ["Users"],
  endpoints: (builder) => ({
    update: builder.mutation({
        query: (credentials) => ({
          url: `/update/${credentials.id}`,
          method: 'PUT', 
          body: credentials
        }),
          invalidatesTags:["Users"]
        }),
    allUsers: builder.query({
        query: ({page=1, items=2})=> ({
            url: `?page=${page}&items=${items}`,
        }),
        providesTags: ["Users"],
    }),
    byId: builder.query({
      query: (id: string) =>  `byid/${id}`,
      providesTags: ["Users"],
    }),
    userByEmail:builder.query({
        query: (email:string) => ({
            url: `/byemail`,
            body: email
        }),
        providesTags: ["Users"],
    }),
    addRole: builder.mutation({
        query: (id: string, ...role) => ({
            url: `/addrole/${id}`,
            method: 'PUT',
            body: role
        })
    }),
    removeRole: builder.mutation({
        query: (id: string, ...role) => ({
            url: `/removerole/${id}`,
            method: 'PUT',
            body: role
        })
    }),
  }),
});

export const {useUpdateMutation, useByIdQuery ,useAllUsersQuery, useUserByEmailQuery, useAddRoleMutation, useRemoveRoleMutation} = usersApi;
