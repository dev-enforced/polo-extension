import React from "react";
export type BrowserContextType = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  mainTask: string;
  setMaintask: React.Dispatch<React.SetStateAction<string>>;
  bgImageUrl: any;
};
export type BrowserProviderChildren = {
  children: React.ReactNode;
};
