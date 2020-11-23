import axios from "axios";

export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

const fetchUsersBegin = () => ({ type: FETCH_USERS_BEGIN });

const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
});

const fetchUsersError = err => ({
  type: FETCH_USERS_ERROR,
  error: err
});

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersBegin());
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log(res.data);
        dispatch(fetchUsersSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchUsersError(err));
      });
  };
};
