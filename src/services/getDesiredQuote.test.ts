import axios from "axios";
import { quoteApiData } from "constants/quoteApiData";
import { getDesiredQuotes } from "./getDesiredQuote";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("get Quote Data from API test", () => {
  describe("for successful api calls", () => {
    it("should return api data", async () => {
      // arrange
      const expectedResponse = { data: quoteApiData };
      // const expectedResponse="";
      mockedAxios.get.mockResolvedValue(expectedResponse);
      // act
      const receivedQuotesList = await getDesiredQuotes();
      // assert
      expect(receivedQuotesList).toEqual(expectedResponse);
    });
  });
});
