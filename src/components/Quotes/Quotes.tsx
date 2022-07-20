import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Quotes.module.css";
const Quotes = () => {
  const [quoteDisplayed, updateQuoteDisplayed] = useState<string>("");
  const getQuotes = async () => {
    const { data: quotesList } = await axios.get(
      `${process.env.REACT_APP_QUOTE_API_URL}`
    );
    const randomNum = Math.floor(Math.random() * 200 - 1);
    const newQuote = `${quotesList[randomNum].text} - ${quotesList[randomNum].author}`;
    updateQuoteDisplayed(newQuote);
  };
  useEffect(() => {
    getQuotes();
  }, []);
  return <div className={styles.quote_text}>{quoteDisplayed}</div>;
};
export { Quotes };
