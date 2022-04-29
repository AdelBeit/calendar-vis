import React from "react";
import styles from "./Day.module.css";
import { DayProps, Activity } from "../types";
import { BarChart } from "reaviz";

const data = [
  { key: "IDS", data: 14 },
  { key: "Malware", data: 5 },
  { key: "DLP", data: 18 },
];

function Day(activities: DayProps) {
  return (
    <div className={styles["section__day"]}>
      <BarChart width={400} height={400} data={data} />
    </div>
  );
}

function Activity(activity: Activity) {}

export { Day };
