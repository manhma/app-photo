import { configureStore } from '@reduxjs/toolkit';
import listPhotoSlice from './listPhotoSlice';

const store = configureStore({
    reducer: {
        listPhoto: listPhotoSlice,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
