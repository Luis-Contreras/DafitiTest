import React, { FC } from "react";
import "./style.css";
import { Types } from "./types";

export const Container: FC<Types> = ({ children }) => {
  return <div className="container">{children}</div>;
};
