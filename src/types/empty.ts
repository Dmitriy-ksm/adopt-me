export enum TestActionTypes {
  INITIAL = "INIT",
  SUCCES = "SUCCES",
  ERROR = "ERROR",
}

interface TestInitAction {
  type: TestActionTypes.INITIAL;
}

interface TestSuccessAction {
  type: TestActionTypes.SUCCES;
  payload: string;
}

interface TestErrorAction {
  type: TestActionTypes.ERROR;
  payload: string[];
}

export type TestAction = TestInitAction | TestSuccessAction | TestErrorAction;

export interface TestState {
  test: string;
  loading: boolean;
  error: string[] | null;
}
