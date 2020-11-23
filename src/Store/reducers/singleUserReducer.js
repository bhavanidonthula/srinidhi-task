import * as actionTypes from "../actions/singleUserActions";

const intialState = {
  userdata: null,
  isLoading: null,
  error: null
};

const singleUserReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SINGLE_USERS_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actionTypes.FETCH_SINGLE_USERS_SUCCESS:
      return {
        ...state,
        userdata: action.payload,
        isLoading: false,
        error: null
      };
    case actionTypes.FETCH_SINGLE_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        userdata: null,
        isLoading: false
      };
    default:
      return state;
  }
};

export default singleUserReducer;
