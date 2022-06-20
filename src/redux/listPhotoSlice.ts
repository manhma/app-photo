import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPhotoData } from '../interface';

export const fetchPhotoData = createAsyncThunk('listPhoto/getdata', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=5', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const json = await res.json();
    return json;
});

// const initialState: IPhotoData[] = [];

export const listPhotoSlice = createSlice({
    name: 'listPhoto',
    initialState: {
        isLoading: false,
        photoData: [],
    },
    reducers: {
        confirmData(state, action) {
            const photoDataState = JSON.parse(JSON.stringify(state.photoData));
            action.payload.map((actionItem: any) => {
                const index = photoDataState.findIndex((itemState: any) => itemState.id === actionItem.id);
                photoDataState.splice(index, 1, actionItem);
            });
            state.photoData = photoDataState;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPhotoData.pending, (state) => {
            state.isLoading = true;
            // state.photoData = [];
        });

        builder.addCase(fetchPhotoData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.photoData = action.payload;
        });

        builder.addCase(fetchPhotoData.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});
export const { confirmData } = listPhotoSlice.actions;
export default listPhotoSlice.reducer;
