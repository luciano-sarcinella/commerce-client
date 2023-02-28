import { createSlice } from '@reduxjs/toolkit'

export const carritoSlice = createSlice({
  name: 'carrito',
  initialState: [],
  reducers: {
    productoAdded(state, action) {
      const {id} = action.payload
      const producto = action.payload
      const productIndex = state.findIndex(p => p.id === id);
      if (productIndex >=0) {
        state[productIndex].value += 1;
      } else {
        state.push(producto)        
      }
    },
    productoDeleted(state, action){
      const  id  = action.payload
      const newProductos = state.filter((obj) => obj.id !== id)
      return newProductos
    },
    increment: (state, action) => {
      const  id  = action.payload;
      const productIndex = state.findIndex(p => p.id === id);
      state[productIndex].value += 1;
    },
    decrement: (state, action) => {
      const  id  = action.payload;
      const productIndex = state.findIndex(p => p.id === id);
      if (state[productIndex].value > 1) {
        state[productIndex].value -= 1;
      }
    },
  }
})

export const todosProductos = (state) => state.carrito
export const cantidadProductos = state => state.carrito.length
export const {productoAdded, productoDeleted, increment,decrement} = carritoSlice.actions
export default carritoSlice.reducer

export const selectCount = (state, id) => { 
  const counter = state.carrito.find(p => p.id === id);
  return counter.value
}

export const valorTotal = (state) => { 
  if (state.carrito.length > 0) {
    const counter = state.carrito.map(({precio, value}) =>(precio * value));
    const total = counter.reduce((a,b)=>a+b)
    return total    
  }
}