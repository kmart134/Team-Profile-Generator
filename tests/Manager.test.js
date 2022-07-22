const Manager = require("../lib/Manager");
test("Can set office account via constructor", () => {
  const testValue = "office";
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.office).toBe(testValue);
});
test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", "office");
  expect(e.getRole()).toBe(testValue);
});
test("Can get office username via getOfficeNumber()", () => {
  const testValue = "office";
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});