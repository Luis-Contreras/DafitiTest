import { FC, useRef, useState } from "react";
import { Label } from "../label";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import "./styles.css";
import { Types } from "./types";

export const Accordion: FC<Types> = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  const toggleAccordion = () => {
    setActive(!active);
    setHeight(active ? "0px" : "300px");
  };

  return (
    <div className="accordion__section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <Label subDescribe>{title}</Label>
        <span style={{ marginLeft: "20px" }}>
          {active ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </span>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};
