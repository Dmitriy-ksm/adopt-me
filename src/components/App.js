import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import SearchParams from "./Home/SearchParams";
// import Details from "./Details/Details";
import ThemeContext from "./Shared/ThemeContext";

const Details = lazy(() => import("./Details/Details"));
const SearchParams = lazy(() => import("./Home/SearchParams"));

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div
        className="p-0 m-0 bg-some-random-colors"
        style={{
          background:
            "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
        }}
      >
        <Suspense fallback={<h2>loading route ...</h2>}>
          <Router>
            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-indigo-dark via-pink-500 to-some-random-colors">
              <Link to="/" className="text-6xl text-white hover:text-gray-200">
                <h1>Adopt Me!</h1>
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
