import { createSlice } from '@reduxjs/toolkit'

const relatedSlice = createSlice({
  name: 'related',
  initialState : [],
  reducers: {
    relatedAdded(state, action) {
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

export const { relatedAdded } = relatedSlice.actions;

export const todosRelated = (state) => state.related

export const selectDetail = (state, id) => { 
  const producto = state.related.find(p => p.id === id);
  return producto
}

export default relatedSlice.reducer;
