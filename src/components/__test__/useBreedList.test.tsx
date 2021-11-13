import { expect, test } from "@jest/globals";
import { renderHook } from "@testing-library/react-hooks";
import useBreedList from "../../api/useBreedList";
import fetch from "jest-fetch-mock";

test("gives an empty list with no animal", async () => {
  const { result } = renderHook(() => useBreedList(""));
  const [breedList, status] = result.current;

  expect(breedList).toHaveLength(0);
  expect(status).toBe("unloaded");
});

test("gives back breeds with an animal", async () => {
  const breeds = ["Havanese", "Bichon Frise", "Poodie", "Corgie"];

  fetch.mockResponseOnce(
    JSON.stringify({
      animal: "dog",
      breeds,
    })
  );

  const { result, waitForNextUpdate } = renderHook(() => useBreedList("dog"));
  await waitForNextUpdate();

  const [breedList, status] = result.current;

  expect(status).toBe("loaded");
  expect(breedList).toEqual(breeds);
});
