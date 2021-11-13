import { LocationActionTypes } from "../../types/location";

export default function changeLocation(location: string) {
  return { type: LocationActionTypes.CHANGE_LOCATION, payload: location };
}
