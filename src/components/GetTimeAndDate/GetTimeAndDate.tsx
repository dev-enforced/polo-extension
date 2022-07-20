import React, { useState, useEffect } from "react";
import { useBrowser } from "context";
import { getPeriodOfTheDay } from "utilities";
import styles from "./GetTimeAndDate.module.css";
const GetTimeAndDate = () => {
  const { username } = useBrowser();
  const [timeAndDateDetails, updateTimeAndDateDetails] = useState<Date>(
    new Date()
  );
  const [clockFormat, setClockFormat] = useState<number>(24);
  const hours = timeAndDateDetails.getHours();
  const hoursIn12 = hours % 12 || 12;
  const minutes = timeAndDateDetails.getMinutes();
  const minutesFormatted = minutes / 10 < 1 ? `0${minutes}` : `${minutes}`;
  const hoursAndMinutesIn24 = `${hours}:${minutesFormatted}`;
  const hoursAndMinutesIn12 = `${hoursIn12}:${minutesFormatted}`;
  const periodOfTheDayInfo = getPeriodOfTheDay(hours);
  useEffect(() => {
    let timer = setTimeout(() => {
      updateTimeAndDateDetails(() => new Date());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [timeAndDateDetails]);
  return (
    <div className={styles.fontEnhanced}>
      <h1
        onClick={() => {
          setClockFormat((prev) => (prev === 12 ? 24 : 12));
        }}
        className={styles.hoursAndMinutesInfo}
      >
        {clockFormat === 24 ? hoursAndMinutesIn12 : hoursAndMinutesIn24}
        <p className={styles.hoursAndMinutesHoverText}>
          Tap on time to change the time format. {clockFormat}
        </p>
      </h1>
      <h1 className={styles.usernameGreetings}>
        {periodOfTheDayInfo} {username}
      </h1>
    </div>
  );
};
export { GetTimeAndDate };
