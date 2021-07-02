import { lista } from "../src/listas";

describe("Validando listas", () => {
  test("Contiene el elemento", () => {
    expect(lista()).toContain("mario");
  });
  test("No contenga ese elemento", () => {
    expect(lista()).not.toContain("maro");
  });
  test("Cantidad de elementos", () => {
    expect(lista()).toHaveLength(3);
  });
});

// toContain
// toHaveLength
