import { Pet } from "./APIResponseTypes";

export enum PetsActionTypes {
  INITIAL = "PET_INIT",
  SUCCES = "PET_SUCCES",
  ERROR = "PET_ERROR",
}

interface PetsInitAction {
  type: PetsActionTypes.INITIAL;
}

interface PetsSuccessAction {
  type: PetsActionTypes.SUCCES;
  payload: Pet[];
}

interface PetsErrorAction {
  type: PetsActionTypes.ERROR;
  payload: string;
}

export type PetsAction = PetsInitAction | PetsSuccessAction | PetsErrorAction;

export interface PetsState {
  pets: Pet[];
  loading: boolean;
  error: string | null;
}
