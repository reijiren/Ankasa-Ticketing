const initialState = {
  airline: [],
  isLoading: false,
  isError: false,
};

const airlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL_AIRLINE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_DETAIL_AIRLINE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "GET_DETAIL_AIRLINE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        airline: action.payload.data,
      };
    default:
      return state;
  }
};

export default airlineReducer;
