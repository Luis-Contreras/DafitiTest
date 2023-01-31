import React, { FC } from "react";
import { BodyTypes } from "./types";

export const Body: FC<BodyTypes> = ({ image, id }) => {
  return <img className="body" src={image} alt={id} />;
};
