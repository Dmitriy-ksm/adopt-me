import { Dispatch } from "react";
import { TestAction, TestActionTypes } from "../../types/test";
export const testFunction = () => {
  return /*async*/ (dispatch: Dispatch<TestAction>) => {
    try {
      dispatch({ type: TestActionTypes.INITIAL });
      const response = "test passed succes";
      setTimeout(() => {
        dispatch({ type: TestActionTypes.SUCCES, payload: response });
      }, 500);
    } catch (e) {
      dispatch({
        type: TestActionTypes.ERROR,
        payload: ["ERROR", "some error code"],
      });
    }
  };
};
