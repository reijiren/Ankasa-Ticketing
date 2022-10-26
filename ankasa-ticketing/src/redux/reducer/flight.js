const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const flightReducer = (state = initialState, action) => {
    console.log(action.type)
  switch (action.type) {
    case "GET_FLIGHT_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_FLIGHT_FULFILLED":
      // console.log(action.payload.data)
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    case "GET_FLIGHT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default flightReducer;
