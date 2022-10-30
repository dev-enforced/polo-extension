type QuoteDataObject = {
  text?: string;
  author?: string;
};
type QuoteDataCollection = Array<QuoteDataObject>;
interface QuoteAPIResponse {
  data: QuoteDataObject[];
}

interface Quote {
  text?: string;
  author?: string;
}

export type { QuoteDataCollection, QuoteAPIResponse, Quote };
