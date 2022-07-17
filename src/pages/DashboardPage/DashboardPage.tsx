import { GetTimeAndDate, Quotes, Settings, WeatherInfo } from "components";
import React from "react";
import styles from "./DashboardPage.module.css";
const DashboardPage = () => {
  return (
    <div className={styles.dashboard_page_container}>
      <span>
        <WeatherInfo />
      </span>
      <span className={styles.date_time_container}>
        <GetTimeAndDate />
      </span>
      <span className={styles.quote_container}>
        <Quotes />
      </span>
      <span className={styles.settings_container}>
        <Settings />
      </span>
    </div>
  );
};
export { DashboardPage };
