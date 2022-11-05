import { getPeriodOfTheDay } from "./getPeriodOfTheDay";
describe("Testing get period of the day function", () => {
  test("Testing afternoon based results of the function", () => {
    // Arrange
    const initialValue = 12;
    const expectedValue = "Good Afternoon";
    // Act
    const resultReceived = getPeriodOfTheDay(initialValue);
    expect(resultReceived).toBe(expectedValue);
  });
  test("Testing Morning based results of the function", () => {
    // Arrange
    const initialValue = 10;
    const expectedValue = "Good Morning";
    // Act
    const resultReceived = getPeriodOfTheDay(initialValue);
    expect(resultReceived).toBe(expectedValue);
  });
  test("Testing night based results of the function", () => {
    // Arrange
    const initialValue = 5;
    const expectedValue = "Good Night";
    // Act
    const resultReceived = getPeriodOfTheDay(initialValue);
    expect(resultReceived).toBe(expectedValue);
  });
  test("Testing evening based results of the function", () => {
    // Arrange
    const initialValue = 18;
    const expectedValue = "Good Evening";
    // Act
    const resultReceived = getPeriodOfTheDay(initialValue);
    expect(resultReceived).toBe(expectedValue);
  });
  test("Testing error based results of the function", () => {
    // Arrange
    const initialValue = 90;
    const expectedValue = "Function not working correctly";
    // Act
    const resultReceived = getPeriodOfTheDay(initialValue);
    expect(resultReceived).toBe(expectedValue);
  });
});
