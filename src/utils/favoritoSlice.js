import { createSlice } from '@reduxjs/toolkit'

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState : [],
  reducers: {
    favoritoAdded(state, action) {
      const {id} = action.payload
      const producto = action.payload
      const productIndex = state.findIndex(p => p.id === id);
      if (productIndex >=0) {
        state[productIndex].value += 1;
      } else {
        state.push(producto)        
      }    
    },
    favoritoDeleted(state, action){
      const  id  = action.payload
      const newProductos = state.filter((obj) => obj.id !== id)
      return newProductos
    }
  }
});

export const { favoritoAdded, favoritoDeleted } = favoritoSlice.actions;

export const todosFavoritos = (state) => state.favorito
export const cantidadFavoritos = state => state.favorito.length

export default favoritoSlice.reducer;
