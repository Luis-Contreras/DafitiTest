import React, { FC } from "react";
import "./style.css";
import { Types } from "./types";

export const CircleButton: FC<Types> = ({ children }) => {
  return <button className="circleButton">{children}</button>;
};
