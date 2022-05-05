import React from "react";
import styles from "./Activity.module.css";
import { ActivityProps } from "../types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 40000,
    pv: 2400,
    abc: 6000,
  },
];

function Activity({ activities }: ActivityProps) {
  // sort activities in chronological order
  // form a continuous Activity line by filling in the gaps
  // plot all of them on the chart using <Bar>
  return (
    <div className={styles["container__activity"]}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          margin={{ top: 0, right: 2, left: 2, bottom: 0 }}
          data={data}
          layout="vertical"
        >
          <XAxis type="number" hide />
          <YAxis type="category" hide />

          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
          <Bar dataKey="abc" stackId="a" fill="blue" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export { Activity };
