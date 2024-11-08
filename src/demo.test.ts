const sum = (a: number, b: number) => {
  return a + b;
};

test("adds 1 + 2", () => {
  expect(sum(1, 2)).toBe(3);
  expect(["1"]).toMatchObject(["1"]);
  expect(false).toBeFalsy();
  expect({ prop1: "hey" }).toHaveProperty("prop1");
});
