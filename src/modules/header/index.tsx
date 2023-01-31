import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-item">
        <MenuIcon style={{ fontSize: "40px" }} />
        <img src="dafiti.webp" alt="dafiti" />
      </div>
      <div className="header-item">
        <FavoriteIcon style={{ fontSize: "30px" }} />
        <ShoppingCartIcon style={{ fontSize: "30px" }} />
      </div>
    </div>
  );
};
