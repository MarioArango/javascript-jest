import { getDataFromApi } from "../src/promise";

describe("Probando funciones async await", () => {
  //PRIMERA FORMA DE VERIFICAR UNA PETICION EXITOSA
  test("Probamos realizar una peticion a una api", async () => {
    await getDataFromApi("https://rickandmortyapi.com/api/character").then(
      (data) => {
        expect(data.results.length).toBeGreaterThan(0);
      }
    );
    await getDataFromApi("https://rickandmortyapi.com/api/character/1").then(
      (data) => {
        expect(data.name).toEqual("Rick Sanchez");
      }
    );
  });

  test("Probamos una peticion exitosa", async () => {
    const resolve = await getDataFromApi(
      "https://rickandmortyapi.com/api/character"
    );
    expect(resolve.results.length).toBeGreaterThan(0);
  });

  //PRIMERA FORMA DE VERIFICAR UN ERROR
  test("Verificando un tipo de error", async () => {
    try {
      await getDataFromApi("http://httpstat.us/500");
    } catch (error) {
      expect(error).toEqual(new Error("Request failed with status code 500"));
    }
  });
  //SEGUNDA FORMA
  test("Verificando el tipo de error", async () => {
    const resolve = getDataFromApi("http://httpstat.us/500");
    await expect(resolve).rejects.toEqual(
      Error("Request failed with status code 500")
    );
  });
});
