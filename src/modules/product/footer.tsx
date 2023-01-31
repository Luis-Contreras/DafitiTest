import React, { FC } from "react";
import { Accordion, CircleButton, Label } from "../../components";
import { Facebook, Twitter, WhatsApp } from "@mui/icons-material";
import { FooterTypes } from "./types";

export const Footer: FC<FooterTypes> = ({ size = [], description }) => {
  return (
    <div className="footer">
      <Label subDescribe>TALLE</Label>
      <div className="wrapperButtons">
        {size.map((item, index: number) => {
          return <CircleButton key={index}>{item.Talle}</CircleButton>;
        })}
      </div>
      <div className="footerIcons">
        <Facebook
          style={{
            fontSize: "30px",
            color: "#767676",
            marginRight: "15px",
          }}
        />
        <Twitter
          style={{
            fontSize: "30px",
            color: "#767676",
            marginRight: "15px",
          }}
        />
        <WhatsApp
          style={{
            fontSize: "30px",
            color: "#767676",
            marginRight: "15px",
          }}
        />
      </div>

      <Accordion title="Descripcion" content={description} />
      <Accordion title="Detalle del producto" content={description} />
    </div>
  );
};
