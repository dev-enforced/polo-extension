import { useBrowser } from "context";
import React from "react";
import { capitaliseUsername } from "utilities";
import styles from "./UserOnboarding.module.css";
const UserOnboardingPage = () => {
  const submitEventHandler = (submitEvent: React.SyntheticEvent) => {
    submitEvent.preventDefault();
  };
  const { setUsername } = useBrowser();
  const receiveNameHandler = (
    keyEvent: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (keyEvent.key === "Enter" && keyEvent.target.value.length > 0) {
      const keyEventValueCapitalised = capitaliseUsername(
        keyEvent.target.value
      );
      setUsername(keyEventValueCapitalised);
      localStorage.setItem("individual_name", keyEventValueCapitalised);
    }
  };
  return (
    <>
      <div className={styles.user_onboarding_container}>
        <div>
          <h1 className={styles.user_onboarding_text}>
            Hello What's your name
          </h1>
        </div>
        <form onSubmit={submitEventHandler}>
          <input
            type="text"
            required
            placeholder="Press enter after typing name"
            className={styles.user_onboarding_input}
            onKeyDown={receiveNameHandler}
          />
        </form>
      </div>
    </>
  );
};
export { UserOnboardingPage };
