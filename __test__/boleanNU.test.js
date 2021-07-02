import { verdadero, falso, nulo, indefinido } from "../src/boleanNU";

describe("Verificando valores", () => {
  test("Valor true", () => {
    expect(verdadero()).toBeTruthy();
  });
  test("Valor false", () => {
    expect(falso()).toBeFalsy();
  });
  test("Valor null", () => {
    expect(nulo()).toBeNull();
  });
  test("Valor undefined", () => {
    expect(indefinido()).toBeUndefined();
  });
  //Si no es true, es igual a decir que sea false
  test("Verifica si no es true", () => {
    expect(falso()).not.toBeTruthy();
  });
  //Si no es false, es igual a decir que sea true
  test("Verifica si no es false", () => {
    expect({}).not.toBeFalsy();
  });
});

/**
 * lo evalua como un if
 */
// toBeTruthy
// toBeFalsy
//not.toBeTruthy
//not.toBeFalsy
// toBeNull
// toBeUndefined
