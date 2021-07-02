//DEPSUES DE CADA PRUEBA
afterEach(() => {
  console.log("Despues de cada prueba");
});

afterAll(() => {
  console.log("Despues de todas las pruebas");
});

//ANTES DE CADA PRUEBA
beforeAll(() => {
  console.log("Antes de todas las pruebas");
});
beforeEach(() => {
  console.log("Despues de cada prueba");
});

describe("Preparar antes de ejecutar", () => {
  test("Verdadero o falso", () => {
    expect(true).toBeTruthy();
  });
});
