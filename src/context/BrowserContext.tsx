import React, { useState, useContext, createContext, useEffect } from "react";
import {
  BrowserContextType,
  BrowserProviderChildren,
  MainGoalState,
} from "types";
import { generateBgImageOnRefresh } from "utilities";
import { gallery } from "constants/gallery";
import { defaultGoalState } from "constants/defaultGoalState";
const BrowserContext = createContext<BrowserContextType>(
  {} as BrowserContextType
);
const BrowserProvider = ({ children }: BrowserProviderChildren) => {
  const [username, setUsername] = useState(
    localStorage.getItem("individual_name") ?? ""
  );
  const [mainTask, setMaintask] = useState("");
  const [bgImageUrl, setBgImageUrl] = useState<String>("");
  const [mainGoal, updateMainGoal] = useState<MainGoalState>(() => {
    if (localStorage.getItem("currentTaskState") !== null) {
      return JSON.parse(localStorage.getItem("currentTaskState") || "");
    } else {
      return defaultGoalState;
    }
  });
  useEffect(() => {
    setBgImageUrl(generateBgImageOnRefresh(gallery));
  }, []);
  useEffect(() => {
    localStorage.setItem(
      "currentTaskState",
      JSON.stringify({
        ...mainGoal,
      })
    );
  }, [mainGoal]);
  return (
    <BrowserContext.Provider
      value={{
        username,
        setUsername,
        mainTask,
        setMaintask,
        bgImageUrl,
        mainGoal,
        defaultGoalState,
        updateMainGoal,
      }}
    >
      {children}
    </BrowserContext.Provider>
  );
};

const useBrowser = () => {
  const browserContextReceived = useContext(BrowserContext);
  if (browserContextReceived === undefined) {
    throw new Error("useBrowser must be used within a browser provider");
  }
  return browserContextReceived;
};

export { useBrowser, BrowserProvider };
