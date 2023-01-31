import React, { FC } from "react";
import "./style.css";
import { Types } from "./types";

export const Wrapper: FC<Types> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};
