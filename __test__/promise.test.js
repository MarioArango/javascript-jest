import { getDataFromApi } from "../src/promise";

describe("Verificando promesas", () => {
  test("Probar promesa al realizar peticion a una api", (done) => {
    getDataFromApi("https://rickandmortyapi.com/api/character").then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });
  test("Probar resolucion de promesas, exitosa", () => {
    //Lo que se almacena como parametro en el resolve de la promesa, se testea su valor
    //para ver si sigue siendo el mismo
    return expect(Promise.resolve("hola")).resolves.toBe("hola");
  });
  test("Probamos que el error nos de un resultado especifico", () => {
    return expect(Promise.reject("Error")).rejects.toBe("Error");
  });
});
