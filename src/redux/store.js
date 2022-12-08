// import {applyMiddleware, createStore} from 'redux';
// import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reduxToolKit/reducers';

// export const store = createStore(rootReducer, applyMiddleware(thunk));

// import rootReducer from './reducers';

export const store = configureStore({
  reducer: rootReducer,
});
