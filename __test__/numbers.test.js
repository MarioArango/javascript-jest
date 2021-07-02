import { sumar } from "../src/math";

describe("Comparadores matematicos", () => {
  test("Igualdad de Enteros", () => {
    expect(sumar(2, 2)).toBe(4);
  });
  test("Igualdad de flotantes", () => {
    expect(sumar(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test("Mayor que", () => {
    expect(sumar(2, 2)).toBeGreaterThan(3);
  });
  test("Mayor o igual que", () => {
    expect(sumar(2, 2)).toBeGreaterThanOrEqual(4);
  });
  test("Menor que", () => {
    expect(sumar(2, 2)).toBeLessThan(5);
  });
  test("Menor o igual que", () => {
    expect(sumar(0.2, 0.2)).toBeLessThanOrEqual(0.4);
  });
});

// toBe
// toBeGreaterThan
// toBeGreaterThanOrEqual
// toBeLessThan
// toBeLessThanOrEqual
