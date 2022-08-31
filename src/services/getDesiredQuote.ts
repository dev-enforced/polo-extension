import axios from "axios";
const quoteApiUrl = process.env.REACT_APP_QUOTE_API_URL ?? "";
const getDesiredQuotes = async () => {
  try {
    const { data: quotesList } = await axios.get(quoteApiUrl);
    return quotesList;
  } catch (getDesiredQuotesError) {
    return getDesiredQuotesError;
  }
};
export { getDesiredQuotes };
