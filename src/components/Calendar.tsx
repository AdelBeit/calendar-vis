import React from "react";
import styles from "./Calendar.module.css";
import { CalendarProps } from "../types";

const Calendar: React.FunctionComponent<CalendarProps> = ({ children }) => {
  return <div className={styles["container__calendar"]}>{children}</div>;
};

export { Calendar };
