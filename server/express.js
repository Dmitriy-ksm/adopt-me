// @ts-nocheck
import express from "express";
import fetch from "node-fetch";
import { renderToNodeStream } from "react-dom/server";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../src/reducer/index";
import { StaticRouter } from "react-router-dom/server";
import fs from "fs";
import App from "../src/components/App";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();
const parts = html.split("not rendered");
const app = express();

app.use("/dist", express.static("dist"));
app.use(async (req, res) => {
  res.write(parts[0]);

  const staticContext = {};
  let petsList = [];
  const pets = await fetch(`http://pets-v2.dev-apis.com/pets?animal=dog`);
  const petsResult = await pets.json();
  petsList = petsResult.pets ? petsResult.pets : [];
  let preloadedState = {
    pets: {
      pets: petsList,
      loading: false,
      error: null,
    },
  };

  const store = createStore(rootReducer, {
    pets: { pets: petsList, loading: false, error: null },
  });

  const finalState = store.getState();

  const app = (
    <StaticRouter
      // @ts-ignore
      url={req.url}
      context={staticContext}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  const stream = renderToNodeStream(app);
  stream.pipe(res, { end: false });
  stream.on("end", () => {
    res.status(staticContext.statusCode || 200);
    res.write(` <script>
     // WARNING: See the following for security issues around embedding JSON in HTML:
     // https://redux.js.org/usage/server-rendering#security-considerations
       window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
         /</g,
         "\\u003c"
       )}
     </script>`);
    res.write(parts[1]);
    res.end();
  });
});

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
