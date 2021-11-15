import { Dispatch } from "react";
import { getPets } from "../../api/loadPets";
import { Animal, Pet } from "../../types/APIResponseTypes";
import { PetsAction, PetsActionTypes } from "../../types/pets";

export const changePetsFromServer = (pets: Pet[]) => {
  return (dispatch: Dispatch<PetsAction>) => {
    dispatch({ type: PetsActionTypes.SUCCES, payload: pets });
  };
};

export const changePets = (animal: Animal, location: string, breed: string) => {
  return async (dispatch: Dispatch<PetsAction>) => {
    try {
      dispatch({ type: PetsActionTypes.INITIAL });
      dispatch({
        type: PetsActionTypes.SUCCES,
        payload: await getPets(animal, location, breed),
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: PetsActionTypes.ERROR,
        payload: "Error when loading pets from pets-v2.dev-apis.com",
      });
    }
  };
};
