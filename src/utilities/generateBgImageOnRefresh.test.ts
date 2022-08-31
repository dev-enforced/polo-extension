import { generateBgImageOnRefresh } from "./generateBgImageOnRefresh";
describe("Testing Generate Background image on refresh function", () => {
  test("Testing the function of the working", () => {
    //Arrange
    const initialValue = [
      "../assets/images/img-6.jpg",
      "../assets/images/img-3.jpg",
    ];
    const expectedValue = "../assets/images/img-3.jpg";

    //Act
    const resultReceived = generateBgImageOnRefresh(initialValue);
    // Do not worry if the result received doesn't match with the expected value
    // Happens because resultReceived variable gets stored with a random value everytime

    // Assert
    expect(resultReceived).toBe(expectedValue);
  });
});
