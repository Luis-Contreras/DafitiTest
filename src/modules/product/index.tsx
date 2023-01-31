import React from "react";
import { Card } from "../../components";
import { Body } from "./body";
import { Description } from "./description";
import DUMMYDATA from "../../data/detalle.json";
import "./style.css";
import { Footer } from "./footer";
import { Related } from "./related";

export const Product = () => {
  const { products = [] } = DUMMYDATA;

  return (
    <div>
      {products.map((item, index) => {
        return (
          <div key={index}>
            <Card
              body={<Body image={item.productimage} id={item.id} />}
              description={
                <Description
                  brand={item.brand}
                  productname={item.productname}
                  seller={item.seller}
                />
              }
              footer={
                <Footer
                  size={item.size_convertion_table.values}
                  description={item.description}
                />
              }
            />
            <Related related={item.related} />
          </div>
        );
      })}
    </div>
  );
};
