import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
import gridReducer from './gridSlice'
import carritoReducer from './carritoSlice'
import favoritoReducer from './favoritoSlice'
import detailReducer from './detailSlice'
import relatedReducer from './relatedSlice'

export default configureStore({
  reducer: {
    grid: gridReducer,
    carrito: carritoReducer,
    favorito:favoritoReducer,
    detail:detailReducer,
    related:relatedReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(apiSlice.middleware)
})
