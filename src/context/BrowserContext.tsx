import React, { useState, useContext, createContext, useEffect } from "react";
import { BrowserContextType, BrowserProviderChildren } from "types";
import { generateBgImageOnRefresh } from "utilities";
import { gallery } from "constants/gallery";
const BrowserContext = createContext<BrowserContextType>(
  {} as BrowserContextType
);
const BrowserProvider = ({ children }: BrowserProviderChildren) => {
  const [username, setUsername] = useState(
    localStorage.getItem("individual_name") ?? ""
  );
  const [mainTask, setMaintask] = useState("");
  const [bgImageUrl, setBgImageUrl] = useState<String>("");
  useEffect(() => {
    setBgImageUrl(generateBgImageOnRefresh(gallery));
  }, []);
  return (
    <BrowserContext.Provider
      value={{ username, setUsername, mainTask, setMaintask, bgImageUrl }}
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
