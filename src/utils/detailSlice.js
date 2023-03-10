import { createSlice } from '@reduxjs/toolkit'

const detailSlice = createSlice({
  name: 'detail',
  initialState : [],
  reducers: {
    detailAdded(state, action) {
      const {id} = action.payload
      const producto = action.payload
      const productIndex = state.findIndex(p => p.id === id);
      if (productIndex >=0) {
        state[productIndex].value += 1;
      } else {
        state.push(producto)        
      }    
    }
  }
});

export const { detailAdded } = detailSlice.actions;

export const todosDetail = (state) => state.detail

export const selectDetail = (state, id) => { 
  const producto = state.detail.find(p => p.id === id);
  return producto
}

export default detailSlice.reducer;
