import React from "react";
import styles from "./Day.module.css";
import { DayProps } from "../types";

const data = [
  {
    name: "Page A",
    uv: 40000,
    pv: 2400,
    abc: 6000,
  },
];

function Day({ weekDate, monthDate }: DayProps) {
  return (
    <div className={styles["container__day"]}>
      <span className={styles["weekdate"]}>{weekDate}</span>
      <span className={styles["monthdate"]}>{monthDate}</span>
    </div>
  );
}

export { Day };
