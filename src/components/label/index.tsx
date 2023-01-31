import React, { FC } from "react";
import "./style.css";
import { Types } from "./types";

export const Label: FC<Types> = ({
  children,
  title,
  describe,
  subDescribe,
  classNames,
}) => {
  return (
    <label
      className={`${classNames && classNames} ${title && "title"} ${
        describe && "describe"
      } ${subDescribe && "sub-describe"} label`}
    >
      {children}
    </label>
  );
};
