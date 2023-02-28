import { createSlice } from '@reduxjs/toolkit'

export const gridSlice = createSlice({
    name:'grid',
    initialState: {value:'large'},
    reducers:{
        large: state=>{state.value = 'large'},
        small: state=>{state.value = 'small'}
    }
})

export const {small, large} = gridSlice.actions
export default gridSlice.reducer

