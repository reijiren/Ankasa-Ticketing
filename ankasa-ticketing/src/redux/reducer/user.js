const initialState = {
  user: [],
  thisUser: [],
  isLoading: false,
  isError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return { ...state, isLoading: true };
    case "LOGIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload.data.data,
      };
    case "LOGIN_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "REGISTER_PENDING":
      return { ...state, isLoading: true };
    case "REGISTER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload.data.data,
      };
    case "REGISTER_REJECTED":
      return { ...state, isLoading: false, isError: true };

    case "GET_USER_PENDING":
      return { ...state, isLoading: true };
    case "GET_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        thisUser: action.payload.data.data,
      };
    case "GET_USER_REJECTED":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default userReducer;
