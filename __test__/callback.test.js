import { myFunction } from "../src/callbacks";

describe("Probando callbacks", () => {
  test("Testear callbacks", (done) => {
    //Se teste lo que se envia como parametro, osea el cb
    const myCallback = (data) => {
      expect(data).toBe("Hola Mario");
      done();
    };
    myFunction(myCallback);
  });
});
