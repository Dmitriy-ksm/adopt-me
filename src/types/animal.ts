import { Animal } from "./APIResponseTypes";

export enum AnimalActionTypes {
  CHANGE_ANIMAL = "CHANGE_ANIMAL",
}

export interface AnimalAction {
  type: AnimalActionTypes.CHANGE_ANIMAL;
  payload: Animal;
}
