import { strings } from "../src/strings";

describe("Verificando strings", () => {
  test("Contiene el texto", () => {
    expect(strings()).toMatch(/mar/);
  });
  test("No contiene el texto", () => {
    expect(strings()).not.toMatch(/aran/);
  });
  test("Comprobar el tamaño de un texto", () => {
    expect(strings()).toHaveLength(5);
  });
});
