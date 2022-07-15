import React from "react";
import { useBrowser } from "context";
import { DashboardPage, UserOnboardingPage } from "pages";
import "./App.css";

const App = () => {
  const { bgImageUrl, username } = useBrowser();
  return (
    <div className="app" style={{ backgroundImage: `url("${bgImageUrl}")` }}>
      {username === "" ? <UserOnboardingPage /> : <DashboardPage />}
    </div>
  );
};

export default App;
