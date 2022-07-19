import React, { FormEvent, useEffect, useState } from "react";
import { MainGoalState } from "types";
import styles from "./GetFocus.module.css";
const GetFocus = () => {
  const defaultGoalState: MainGoalState = {
    completion_status: false,
    title: "",
    edit_status: false,
  };

  const [mainGoal, updateMainGoal] = useState<MainGoalState>(() => {
    if (localStorage.getItem("currentTaskState") !== null) {
      return JSON.parse(localStorage.getItem("currentTaskState") || "");
    } else {
      return defaultGoalState;
    }
  });
  const submitHandler = (submitEvent: FormEvent) => {
    submitEvent.preventDefault();
  };
  const receiveGoal = (keyAction: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      keyAction.key === "Enter" &&
      keyAction.target.value.length > 0 &&
      keyAction.target.value.trim() !== ""
    ) {
      updateMainGoal((prev) => ({
        ...prev,
        title: keyAction.target.value.trim(),
        edit_status: false,
      }));
      localStorage.setItem(
        "currentTaskState",
        JSON.stringify({
          completion_status: mainGoal.completion_status,
          title: keyAction.target.value.trim(),
          edit_status: false,
        })
      );
    }
  };
  const updateGoalTitle = () => {
    updateMainGoal((prev) => ({
      ...prev,
      edit_status: true,
      completion_status: false,
    }));
  };
  const deleteCurrentGoal = () => {
    updateMainGoal(defaultGoalState);
    localStorage.removeItem("currentTaskState");
  };
  const updateGoalStatus = () => {
    updateMainGoal((prev) => ({
      ...prev,
      completion_status: !prev.completion_status,
    }));
  };

  useEffect(() => {
    localStorage.setItem(
      "currentTaskState",
      JSON.stringify({
        ...mainGoal,
      })
    );
  }, [mainGoal]);
  return (
    <>
      {mainGoal.title !== "" && !mainGoal.edit_status ? (
        <div className={styles.current_goal_container}>
          <div className={styles.current_goal_input_container}>
            <input
              type="checkbox"
              id="checkbox"
              className={styles.goal_completion_check}
              checked={mainGoal.completion_status}
              onChange={updateGoalStatus}
            />
            <label
              htmlFor="checkbox"
              className={`${styles.current_goal_title} ${
                mainGoal.completion_status ? styles.completed_goal : ""
              }`}
            >
              {mainGoal.title}
            </label>
          </div>
          <div>
            <span
              className={`material-icons-outlined ${styles.goal_action_icons}`}
              onClick={updateGoalTitle}
            >
              mode_edit
            </span>
            <span
              className={`material-icons-outlined ${styles.goal_action_icons}`}
              onClick={deleteCurrentGoal}
            >
              delete
            </span>
          </div>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <h3 className={styles.goal_title_question}>
            What's your main goal for today?
          </h3>
          <input
            type="text"
            className={styles.goal_input}
            placeholder="Press enter after providing goal"
            value={mainGoal.title}
            onKeyPress={receiveGoal}
            onChange={(e) => {
              updateMainGoal((prev) => ({
                ...prev,
                title: e.target.value,
                edit_status: true,
              }));
            }}
            autoComplete="off"
            autoFocus
            required
          />
        </form>
      )}
    </>
  );
};
export { GetFocus };
