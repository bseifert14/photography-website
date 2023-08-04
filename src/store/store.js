import { configureStore } from '@reduxjs/toolkit'
import photoReducer from './gallery/photoSlice';

export default configureStore({
    reducer: {
        photo: photoReducer,
    },
})