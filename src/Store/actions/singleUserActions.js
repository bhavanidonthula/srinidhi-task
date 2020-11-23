import axios from "axios";

export const GET_USER_NAME = "GET_USER_NAME";

export const FETCH_SINGLE_USERS_BEGIN = "FETCH_SINGLE_USERS_BEGIN";
export const FETCH_SINGLE_USERS_SUCCESS = "FETCH_SINGLE_USERS_SUCCESS";
export const FETCH_SINGLE_USERS_ERROR = "FETCH_SINGLE_USERS_ERROR";

export const fetchUserId = id => ({
  type: GET_USER_NAME,
  id: id
});

const fetchSingleUserBegin = () => ({
  type: FETCH_SINGLE_USERS_BEGIN
});
const fetchSingleUserSuccess = data => ({
  type: FETCH_SINGLE_USERS_SUCCESS,
  payload: data
});
const fetchSingleUserError = err => ({
  type: FETCH_SINGLE_USERS_ERROR,
  payload: err
});

export const fetchSingleUser = id => {
  console.log(id);
  return dispatch => {
    dispatch(fetchUserId(id));
    return axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        dispatch(fetchSingleUserBegin());
        console.log("from singleUserActions.js ", res.data);
        dispatch(fetchSingleUserSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchSingleUserError(err));
      });
  };
};
