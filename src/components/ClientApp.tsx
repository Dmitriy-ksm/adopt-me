import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "../style/style.css";

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
