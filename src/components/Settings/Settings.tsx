import React, { useState } from "react";
import { useBrowser } from "context";
import styles from "./Settings.module.css";
const Settings = () => {
  const [optionView, setOptionView] = useState<boolean>(false);
  const toggleOptionView = () => {
    setOptionView((prev) => !prev);
  };
  const resetName = () => {
    localStorage.setItem("individual_name", "");
    setUsername("");
  };
  const { setUsername } = useBrowser();
  return (
    <>
      <span className={`material-icons-outlined ${styles.cursor_pointer}`} onClick={toggleOptionView}>
        settings
      </span>
      {optionView ? (
        <button className={styles.options_btn} onClick={resetName}>
          CHANGE NAME
        </button>
      ) : null}
    </>
  );
};
export { Settings };
