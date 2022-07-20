import React from "react";
import { MainGoalState } from "types/componentStateTypes";
export type BrowserContextType = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  mainTask: string;
  setMaintask: React.Dispatch<React.SetStateAction<string>>;
  bgImageUrl: any;
  mainGoal: MainGoalState;
  defaultGoalState: MainGoalState;
  updateMainGoal: React.Dispatch<React.SetStateAction<MainGoalState>>;
};
export type BrowserProviderChildren = {
  children: React.ReactNode;
};
