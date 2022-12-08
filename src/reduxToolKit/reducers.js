import {combineReducers} from 'redux';

import {getBrandSlice} from './Brands/slices';

const rootReducer = combineReducers({
  getBrandsToolKitReducer: getBrandSlice.reducer,
});

export default rootReducer;
