import { useState, StrictMode } from "react";
import { Route, Link, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import SearchParams from "./Home/SearchParams";
import Details from "./Details/Details";
import ThemeContext from "./Shared/ThemeContext";
import store from "../store/index";

const App = () => {
  const themeHook = useState("darkblue");
  // const store = configureStore();
  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeContext.Provider value={themeHook}>
          <div
            className="p-0 m-0 bg-some-random-colors"
            style={{
              background:
                "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
            }}
          >
            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-indigo-dark via-pink-500 to-some-random-colors">
              <Link to="/" className="text-6xl text-white hover:text-gray-200">
                <h1>Adopt Me!</h1>
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </div>
        </ThemeContext.Provider>
      </Provider>
    </StrictMode>
  );
};

export default App;
