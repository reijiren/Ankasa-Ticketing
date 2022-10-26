import { combineReducers } from "redux";

// import airlineReducer from './airline';
<<<<<<< HEAD
// import bookingReducer from "./booking";
// import flightReducer from "./flight";
// import userReducer from "./user";

const rootReducer = combineReducers({
	// airline: airlineReducer,
	// booking: bookingReducer,
	// user: userReducer,
	// flight: flightReducer,
});

=======
// import bookingReducer from './booking';
import flightReducer from "./flight";
// import userReducer from './user';

const rootReducer = combineReducers({
  // airline: airlineReducer,
  // booking: bookingReducer,
  // user: userReducer,
  flight: flightReducer,
  detailflight: flightReducer,
});
>>>>>>> 5fb705260027124aea78d6f962ee527cf809beff
export default rootReducer;
