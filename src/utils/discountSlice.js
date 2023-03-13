import { createSlice } from '@reduxjs/toolkit'

export const discountSlice = createSlice({
  name:'discount',
  initialState: {value:'original'},
  reducers:{
    original: state=>{state.value = 'original'},
    discount: state=>{state.value = 'descuento'}
  }
})

export const {original, discount} = discountSlice.actions
export default discountSlice.reducer

