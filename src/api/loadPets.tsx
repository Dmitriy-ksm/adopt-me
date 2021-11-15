import { Animal, Pet, PetAPIResponse } from "../types/APIResponseTypes";

export async function getPets(animal: Animal, location: string, breed: string) {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  const json = (await res.json()) as PetAPIResponse;
  return json.pets;
}

export async function getPetsServer(
  animal: Animal,
  location: string,
  breed: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (pets: Pet[]) => any
) {
  await getPets(animal, location, breed).then((value) => {
    callback(value);
  });
  return;
}
