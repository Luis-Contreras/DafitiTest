export interface BodyTypes {
  image: string;
  id: string;
}

export interface DescriptionTypes {
  brand: string;
  productname: string;
  seller: string;
}

export interface FooterTypes {
  size: { Talle: string }[];
  description: string;
}

export interface RelatedTypes {
  related:
    | {
        productimage: string;
        id: string;
        originalprice: string;
        discountprice: string;
      }[]
    | any;
}
