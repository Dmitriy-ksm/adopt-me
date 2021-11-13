import { BreedAction, BreedActionTypes } from "../types/breed";

export default function breedReducer(state = "", action: BreedAction): string {
  switch (action.type) {
    case BreedActionTypes.CHANGE_BREED:
      return action.payload;
    default:
      return state;
  }
}
