import {combineReducers} from 'redux';

import getBrandsReducer from './Brands/reducers';

const rootReducer = combineReducers({
  getBrandsReducer,
});

export default rootReducer;
