import { createSlice } from '@reduxjs/toolkit'

export const photoSlice = createSlice({
    name: 'photo',
    initialState: {
        selected: null
    },
    reducers: {
        setPhoto: (state, action) => {
            state.selected = action.payload
        }
    },
})

export const { setPhoto } = photoSlice.actions

export default photoSlice.reducer