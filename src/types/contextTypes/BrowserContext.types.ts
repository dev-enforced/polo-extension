import React from "react";
export type BrowserContextType = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  mainTask: string;
  setMaintask: React.Dispatch<React.SetStateAction<string>>;
};
export type BrowserProviderChildren = {
  children: React.ReactNode;
};
