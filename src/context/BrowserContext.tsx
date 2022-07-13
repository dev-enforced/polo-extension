import React, { useState, useContext, createContext } from "react";
import { BrowserContextType, BrowserProviderChildren } from "types";
const BrowserContext = createContext<BrowserContextType>(
  {} as BrowserContextType
);
const BrowserProvider = ({ children }: BrowserProviderChildren) => {
  const [username, setUsername] = useState("");
  const [mainTask, setMaintask] = useState("");
  return (
    <BrowserContext.Provider
      value={{ username, setUsername, mainTask, setMaintask }}
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
