import { combineReducers } from "@reduxjs/toolkit";
import locationReducer from "./location";
import breedReducer from "./breed";
import animalReducer from "./animal";
import petsReducer from "./pet";

export const rootReducer = combineReducers({
  location: locationReducer,
  breed: breedReducer,
  animal: animalReducer,
  pets: petsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
