import { combineReducers } from "@reduxjs/toolkit";
import locationReducer from "./location";
import breedReducer from "./breed";
import animalReducer from "./animal";

export const rootReducer = combineReducers({
  location: locationReducer,
  breed: breedReducer,
  animal: animalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
