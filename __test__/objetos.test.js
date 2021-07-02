import { user, user2 } from "../src/objetos";

describe("Comparando objetos", () => {
  test("Igualdad de objetos", () => {
    expect(user).toEqual(user2);
  });
  test("No igualdad de objetos", () => {
    expect(user).not.toEqual(user2);
  });
});

// toEqual
