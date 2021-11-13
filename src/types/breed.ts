export enum BreedActionTypes {
  CHANGE_BREED = "CHANGE_BREED",
}

export interface BreedAction {
  type: BreedActionTypes.CHANGE_BREED;
  payload: string;
}
