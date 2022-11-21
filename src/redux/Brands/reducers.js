import {GetBrandsTypes} from './actions';

const init = {
  data: [],
  loading: false,
  error: [],
};

const getBrandsReducer = (state = init, action) => {
  console.log('💩: getBrandsReducer -> action', action);
  switch (action.type) {
    case GetBrandsTypes.GET_BRANDS:
      return {...state, loading: true};
    case GetBrandsTypes.GET_BRANDS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action?.response?.rows],
        loading: false,
      };
    case GetBrandsTypes.GET_BRANDS_SUCCESS:
      return {...state, error: action.error, loading: false};
    default:
      return state;
  }
};

export default getBrandsReducer;
