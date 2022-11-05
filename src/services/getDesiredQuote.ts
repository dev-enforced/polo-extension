import axios from "axios";
const quoteApiUrl =
  process.env.REACT_APP_QUOTE_API_URL ?? "https://type.fit/api/quotes";
const getDesiredQuotes = async (): Promise<any> => {
  try {
    const responseReceived = await axios.get(quoteApiUrl);
    const responseObj = { data: responseReceived?.data ?? [] };
    // const { data: quotesList } = await axios.get(quoteApiUrl);
    // return quotesList;
    return responseObj;
  } catch (getDesiredQuotesError) {
    return getDesiredQuotesError;
  }
};
export { getDesiredQuotes };
