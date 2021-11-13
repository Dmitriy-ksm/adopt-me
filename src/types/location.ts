export enum LocationActionTypes {
  CHANGE_LOCATION = "CHANGE_LOCATION",
}

export interface LocationAction {
  type: LocationActionTypes.CHANGE_LOCATION;
  payload: string;
}
