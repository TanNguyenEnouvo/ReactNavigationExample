export const GetBrandsTypes = {
  GET_BRANDS: 'GET_BRANDS',
  GET_BRANDS_SUCCESS: 'GET_BRANDS_SUCCESS',
  GET_BRANDS_FAILURE: 'GET_BRANDS_FAILURE',
};

const getBrands = () => {
  return {
    type: GetBrandsTypes.GET_BRANDS,
  };
};

const getBrandsSuccess = response => {
  return {
    type: GetBrandsTypes.GET_BRANDS_SUCCESS,
    response,
  };
};

const getBrandsFailure = error => {
  return {
    type: GetBrandsTypes.GET_BRANDS_FAILURE,
    error,
  };
};

export default {
  getBrands,
  getBrandsSuccess,
  getBrandsFailure,
};
