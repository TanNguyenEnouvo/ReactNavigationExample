import {createSlice} from '@reduxjs/toolkit';
import {getBrandsData} from './thunk';

const initialState = {
  data: [],
  loading: false,
  error: [],
};

export const getBrandSlice = createSlice({
  name: 'task',
  initialState,
  extraReducers: builder => {
    builder.addCase(getBrandsData.pending, (state, action) => {
      console.log('💩: action', action);
      state.loading = true;
    });
    builder.addCase(getBrandsData.fulfilled, (state, action) => {
      console.log('💩: action', action);
      state.loading = false;
      state.data.push(action?.payload?.rows);
    });
    builder.addCase(getBrandsData.rejected, (state, action) => {
      console.log('💩: action', action);
      state.loading = false;
      // state.error = false;
    });
  },
  // reducers: {
  //   skipIntro: (state, action) => {
  //     state.tasks.push(action.payload);
  //   },
  // },
});

export const {addTask} = getBrandSlice.actions;
export const selectTask = state => state.task;
export default getBrandSlice.reducer;
