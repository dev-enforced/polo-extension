import React, { useState, useEffect } from "react";
import { getDesiredQuotes } from "services";
import styles from "./Quotes.module.css";
const Quotes = () => {
  const [quoteDisplayed, updateQuoteDisplayed] = useState<string>("");
  const getQuotes = async () => {
    const responseObj = await getDesiredQuotes();
    const { data: quotesList } = responseObj;
    const randomNum = Math.floor(Math.random() * 200 - 1);
    const { text: quoteText, author: quoteAuthor } = quotesList[randomNum];
    const quoteToBeDisplayed = `${quoteText} - ${quoteAuthor}`;
    updateQuoteDisplayed(quoteToBeDisplayed as string);
  };
  useEffect(() => {
    getQuotes();
  }, []);
  return <div className={styles.quote_text}>{quoteDisplayed}</div>;
};
export { Quotes };
