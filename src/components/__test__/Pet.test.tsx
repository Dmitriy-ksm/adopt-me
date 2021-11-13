import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Pet from "../Home/Pet";

test("displayes a default thumbnail", async () => {
  const pet = render(
    <StaticRouter location={""}>
      <Pet name={""} animal={""} breed={""} images={[]} location={""} id={0} />
    </StaticRouter>
  );

  const pethThumbail = (await pet.findByTestId(
    "thumbnail"
  )) as HTMLImageElement;

  expect(pethThumbail.src).toContain("none.jpg");
});

test("displays a non-default, correct thumbnail", async () => {
  const pet = render(
    <StaticRouter location={""}>
      <Pet
        images={["1.jpg", "2.jph", "3.jpg"]}
        name={""}
        animal={""}
        breed={""}
        location={""}
        id={0}
      />
    </StaticRouter>
  );

  const pethThumbail = (await pet.findByTestId(
    "thumbnail"
  )) as HTMLImageElement;

  expect(pethThumbail.src).toContain("1.jpg");
});
