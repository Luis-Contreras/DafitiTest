import React, { FC } from "react";
import "./style.css";
import { Types } from "./types";

export const Link: FC<Types> = ({ children, href }) => {
  return (
    <a className="link" href={href}>
      {children}
    </a>
  );
};
