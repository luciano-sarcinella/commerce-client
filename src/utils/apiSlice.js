import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
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