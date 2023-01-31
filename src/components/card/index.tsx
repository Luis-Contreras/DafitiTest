import React, { FC } from "react";
import "./style.css";
import { Types } from "./types";

export const Card: FC<Types> = ({ header, body, description, footer }) => {
  return (
    <div>
      <div className="header-card">{header}</div>
      <div className="card-body">{body}</div>
      <div className="card-description">{description}</div>
      <div className="footer-card">{footer}</div>
    </div>
  );
};
