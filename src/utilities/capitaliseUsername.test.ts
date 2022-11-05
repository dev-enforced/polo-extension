import { capitaliseUsername } from "./capitaliseUsername";
describe("Testing capitalise username function", () => {
  test("Testing the work of the capitalise function", () => {
    // Arrange
    const initialValue = "pushkar";
    const expectedValue = "Pushkar";
    // Act
    const resultReceived = capitaliseUsername(initialValue);
    // Assert
    expect(resultReceived).toBe(expectedValue);
  });
});
