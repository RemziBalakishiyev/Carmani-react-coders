import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../store/product-context";
import { useState } from "react";

function ProductDetail() {
  const param = useParams();

  const PrContext = useContext(ProductContext);

  const product = PrContext.products.find((pr) => pr.id == param.id);
  const [FindItems, setFindItems] = useState(product);

  return <div>ProductDetail - {FindItems.name}</div>;
}

export default ProductDetail;
