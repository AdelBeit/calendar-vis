import React from "react";
import styles from "./Tile.module.css";
import { TileProps } from "../types";

const Tile: React.FunctionComponent<TileProps> = ({ children }) => {
  return <div className={styles["container__tile"]}>{children}</div>;
};

export { Tile };
