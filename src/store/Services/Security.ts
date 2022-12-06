import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const securityApi = createApi({
  reducerPath: 'securityApi',
  baseQuery: fetchBaseQuery(
      {
        baseUrl: `${process.env.REACT_APP_API_BASE_URL}/security`,
        prepareHeaders: (headers) => {
          headers.set('apikey', process.env.REACT_APP_API_KEY as string)
        }
      }
    ),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials
      })
    }),
    signin: builder.mutation({
      query: (credentials) => ({
        url: 'signin',
        method: 'POST',
        body: credentials,
     })
    }),
    sent: builder.mutation({
      query: (credentials) => ({
        url: 'recoverpassword',
        method: 'POST',
        body: credentials,
      })
    }),
    changepassword: builder.mutation({
      query: (credentials) => ({
        url: 'changepassword',
        method: 'POST',
        body: credentials,
      })
    }),
  }),
});

export const {useLoginMutation, useSigninMutation, useSentMutation, useChangepasswordMutation} = securityApi;
