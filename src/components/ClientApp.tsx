import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import "../style/style.css";
import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducer/index";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __PRELOADED_STATE__: any;
  }
}

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
//   }
// }

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const store = createStore(rootReducer, window.__PRELOADED_STATE__);
console.log(store);
delete window.__PRELOADED_STATE__;

hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
