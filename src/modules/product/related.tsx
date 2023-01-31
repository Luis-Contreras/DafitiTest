import React, { FC } from "react";
import { Label } from "../../components";
import { RelatedTypes } from "./types";

export const Related: FC<RelatedTypes> = ({ related = [] }) => {
  return (
    <div className="related">
      <Label subDescribe>RECOMENDACIONES</Label>

      <div className="relatedItems">
        {related.map((item: any, index: number) => {
          return (
            <div key={index} className="relatedItem">
              <img
                className="relatedImg"
                src={item.productimage}
                alt={item.id}
              />
              <Label describe>{item.brand}</Label>
              <div>
                <Label describe>${item.discountprice}</Label>
                <Label classNames="line" describe>
                  ${item.originalprice}
                </Label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
