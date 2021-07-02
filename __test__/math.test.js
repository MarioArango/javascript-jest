import { sumar, multiplicar, restar, dividir } from "../src/math";

describe("Calculos matematicos", () => {
  test("prueba de sumas", () => {
    expect(sumar(1, 1)).toBe(2);
  });
  test("prueba de multiplicacion", () => {
    expect(multiplicar(1, 2)).toBe(2);
  });
  test("prueba de restar", () => {
    expect(restar(2, 1)).toBe(1);
  });
  test("prueba de dividir", () => {
    expect(dividir(2, 1)).toBe(2);
  });
});

// toBe
