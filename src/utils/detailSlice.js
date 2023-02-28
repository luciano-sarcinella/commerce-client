import { createSlice } from '@reduxjs/toolkit'

const detailSlice = createSlice({
  name: 'detail',
  initialState : [],
  reducers: {
    detailAdded(state, action) {
      const producto = action.payload
      state.push(producto)      
    }
  }
});

export const { detailAdded, favoritoDeleted } = detailSlice.actions;

export const todosDetail = (state) => state.detail

export const selectDetail = (state, id) => { 
  const producto = state.detail.find(p => p.id === id);
  return producto
}

export default detailSlice.reducer;
