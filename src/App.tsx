import React from "react";
import styles from "./App.module.css";
import { Calendar } from "./components/Calendar";
import { Day } from "./components/Day";
import Layout from "./components/Layout";

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

export default function App() {
  return (
    <Layout title="Calendar">
      <div className={styles["app__container"]}>
        <Day activities={...objects} />
      </div>
    </Layout>
  );
}
