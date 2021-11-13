import { Animal } from "../types/APIResponseTypes";
import { AnimalAction, AnimalActionTypes } from "../types/animal";

const initialState: Animal = "dog";

export default function animalReducer(
  state = initialState,
  action: AnimalAction
): Animal {
  switch (action.type) {
    case AnimalActionTypes.CHANGE_ANIMAL:
      return action.payload;
    default:
      return state;
  }
}
