import {createAsyncThunk} from '@reduxjs/toolkit';
import {getBrandApi} from '../../api/brand';

export const getBrandsData = createAsyncThunk(
  'brands/getBrandsData',
  async ({limit, page}, thunkAPI) => {
    const response = await getBrandApi({limit, page});
    return response.data;
  },
);
