import { Animal } from "../../types/APIResponseTypes";
import { AnimalAction, AnimalActionTypes } from "../../types/animal";
export default function changeAnimal(animal: Animal): AnimalAction {
  return { type: AnimalActionTypes.CHANGE_ANIMAL, payload: animal };
}
