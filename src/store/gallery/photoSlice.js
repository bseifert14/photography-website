import { createSlice } from '@reduxjs/toolkit'

export const photoSlice = createSlice({
    name: 'photo',
    initialState: {
        selected: null
    },
    reducers: {
        setPhoto: (state, action) => {
            state.selected = action.payload
        },
        
        clearSelected: (state) => {
            state.selected = null
        }
    },
})

export const { setPhoto, clearSelected } = photoSlice.actions

export default photoSlice.reducer