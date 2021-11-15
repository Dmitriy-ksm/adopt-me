import { PetsAction, PetsActionTypes, PetsState } from "../types/pets";

const initialState: PetsState = {
  pets: [],
  loading: false,
  error: null,
};

export default function petsReducer(
  state = initialState,
  action: PetsAction
): PetsState {
  switch (action.type) {
    case PetsActionTypes.INITIAL:
      return {
        pets: state.pets,
        loading: true,
        error: null,
      };
    case PetsActionTypes.SUCCES:
      return {
        pets: action.payload,
        loading: false,
        error: null,
      };
    case PetsActionTypes.ERROR:
      return {
        pets: state.pets,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
