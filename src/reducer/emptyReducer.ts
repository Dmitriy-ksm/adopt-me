import { TestAction, TestState, TestActionTypes } from "../types/empty";

const initialState: TestState = {
  test: "no test",
  loading: false,
  error: null,
};

export const testReducer = (
  state = initialState,
  action: TestAction
): TestState => {
  switch (action.type) {
    case TestActionTypes.INITIAL:
      return {
        test: "initial test",
        loading: true,
        error: null,
      };
    case TestActionTypes.SUCCES:
      return {
        test: action.payload,
        loading: false,
        error: null,
      };
    case TestActionTypes.ERROR:
      return {
        test: "test error",
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
