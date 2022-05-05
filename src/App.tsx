import React from "react";
import styles from "./App.module.css";
import calendarStyles from "./components/Calendar.module.css";
import { Calendar } from "./components/Calendar";
import { Day } from "./components/Day";
import Layout from "./components/Layout";
import { Tile } from "./components/Tile";
import { Activity } from "./components/Activity";
import clsx from "clsx";

const objects = [
  {
    end: "2022 Wed Apr 20 01:53 PM",
    start: "2022 Wed Apr 20 01:23 PM",
    title: "Escape Simulator",
  },
  {
    end: "2022 Wed Apr 20 01:56 PM",
    start: "2022 Wed Apr 20 01:55 PM",
    title: "Logic Light",
  },
];

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function App() {
  // store current month in state
  // store current week of month in state
  const header = weekDays.map((day) => {
    return (
      <Tile>
        <Day weekDate={day} monthDate={2} />
      </Tile>
    );
  });
  const body = weekDays.map((day) => {
    return (
      <Tile>
        <Activity activities={objects} />
      </Tile>
    );
  });
  return (
    <Layout title="Calendar">
      <div className={styles["container__app"]}>
        <Calendar>
          <div className={calendarStyles["row"]}>
            <Tile>
              <div></div>
            </Tile>
            {header}
          </div>
          <div className={clsx(calendarStyles.row, calendarStyles.body)}>
            <Tile>
              <div>Activity</div>
            </Tile>
            {body}
          </div>
        </Calendar>
      </div>
    </Layout>
  );
}
