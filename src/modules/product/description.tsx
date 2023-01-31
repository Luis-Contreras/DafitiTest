import React, { FC } from "react";
import { Label, Link } from "../../components";
import { FavoriteBorder } from "@mui/icons-material";
import { DescriptionTypes } from "./types";

export const Description: FC<DescriptionTypes> = ({
  brand,
  productname,
  seller,
}) => {
  return (
    <div className="decription">
      <div className="description-info">
        <Label title>{brand}</Label>
        <Label describe>{productname}</Label>
        <div>
          <Label subDescribe>Vendido y entregado:</Label>
          <Link>{seller}</Link>
        </div>
      </div>

      <FavoriteBorder style={{ fontSize: "50px", color: " #c1c3c7" }} />
    </div>
  );
};
