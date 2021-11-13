import { BreedActionTypes } from "../../types/breed";

export default function changeBreed(breed: string) {
  return { type: BreedActionTypes.CHANGE_BREED, payload: breed };
}
