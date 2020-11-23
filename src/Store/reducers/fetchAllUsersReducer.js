import * as actionType from "../actions/fetchUserActions";

const intialState = {
  singleUser: "",
  loading: false,
  users: [],
  error: null
};

const fetchUserReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionType.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null
      };
    case actionType.FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        users: []
      };
    default:
      return state;
  }
};

export default fetchUserReducer;
