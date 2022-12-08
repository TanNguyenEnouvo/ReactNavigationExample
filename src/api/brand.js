import axiosRequest from '.';

export async function getBrandApi({page = 1, limit = 10}) {
  let url = `/retailer-app/brands?page=${page}&size=${limit}`;
  return axiosRequest.get(url);
}
