import { LocationAction, LocationActionTypes } from "../types/location";

const initialState = "";

export default function locationReducer(
  state = initialState,
  action: LocationAction
): string {
  switch (action.type) {
    case LocationActionTypes.CHANGE_LOCATION:
      return action.payload;
    default:
      return state;
  }
}
