import { useEffect, useContext, FunctionComponent } from "react";
// import { useSelector } from "react-redux";
import ThemeContext from "../Shared/ThemeContext";
import Results from "./Results";
import useBreedList from "../../api/useBreedList";
import { Animal } from "../../types/APIResponseTypes";

import changeLocation from "../../store/action-creater/changeLocation";
import changeAnimal from "../../store/action-creater/changeAnimal";
import changeBreed from "../../store/action-creater/changeBreed";
import { useAppDispatch } from "../../store/index";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { changePets } from "../../store/action-creater/changePet";

const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams: FunctionComponent = () => {
  const animal = useTypedSelector((state) => state.animal);
  const location = useTypedSelector((state) => state.location);
  const breed = useTypedSelector((state) => state.breed);
  const pets = useTypedSelector((state) => state.pets);
  //const [pets, setPets] = useState([] as Pet[]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  const someDispath = changePets(animal, location, breed);

  async function requestPetsV2() {
    await someDispath(dispatch);
  }
  useEffect(() => {
    void requestPetsV2();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  // async function requestPets() {
  //   const res = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //   );
  //   const json = (await res.json()) as PetAPIResponse;

  //   //setPets(json.pets);
  // }

  function handleAnimalChange(value: Animal) {
    if (value != animal) dispatch(changeBreed(""));
    dispatch(changeAnimal(value));
  }

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900"
        onSubmit={(e) => {
          e.preventDefault();
          void requestPetsV2();
        }}
      >
        <label className="search-label" htmlFor="location">
          Location
          <input
            className="search-control"
            id="location"
            onChange={(e) => dispatch(changeLocation(e.target.value))}
            value={location}
            placeholder="Location"
          />
        </label>
        <label className="search-label" htmlFor="animal">
          Animal
          <select
            id="animal"
            className="search-control"
            value={animal}
            onChange={(e) => handleAnimalChange(e.target.value as Animal)}
            onBlur={(e) => handleAnimalChange(e.target.value as Animal)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label className="search-label" htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            className="search-control disabled:opacity-50"
            value={breed}
            onChange={(e) => dispatch(changeBreed(e.target.value))}
            onBlur={(e) => dispatch(changeBreed(e.target.value))}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label className="search-label" htmlFor="theme">
          Theme
          <select
            value={theme}
            className="search-control"
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="darkblue">Dark blue</option>
            <option value="peru">Peru</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Mediumorchid</option>
          </select>
        </label>
        <button
          className="rounded px-6 py-2 text-white hover:opacity-50 border-none"
          style={{ backgroundColor: theme }}
        >
          Submit
        </button>
      </form>
      <Results pets={pets.pets} />
    </div>
  );
};

export default SearchParams;
