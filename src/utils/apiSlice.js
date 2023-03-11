import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const apiUrl = process.env.REACT_APP_API_URL;


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
    endpoints: builder => ({
      getProductos: builder.query({
        query: pageId => `/productos/${pageId}`      
      }),
      getVendidos: builder.query({
        query: () => `inicio`      
      }),
    }),
})

export const {useGetProductosQuery, useGetVendidosQuery} = apiSlice