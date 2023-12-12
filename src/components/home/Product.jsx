import React, { useState, useEffect, useContext } from "react";
import { Divider, Stack, Button, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import FilterProduct from "./FilterProduct";
import { ProductContext } from "../../store/product-context";
import useFetch from "../../hooks/useFetch";

function Product() {
  const [loadData, setloadData] = useState([]);
  let PrContext = useContext(ProductContext);

  const filterForType = function (enteredType, values) {
    return values.filter((v) => v.type == enteredType);
  };

  PrContext.handleFilterForType = filterForType;

  const { responseData, error } = useFetch(
    "https://carmani-projects-default-rtdb.firebaseio.com/products.json",
    (value) => {
      setloadData(value);
    }
  );

  PrContext.products = responseData;
  PrContext.filteredProducts = filterForType(1, responseData);

  PrContext.handleFilter = () => {
    setloadData((prevData) => [...PrContext.filteredProducts]);
  };

  PrContext.addCard = function (id) {
    const filteredProduct = Object.values(loadData).find((ld) => ld.id == id);

    if (filteredProduct) {
      PrContext.cardItems = [...PrContext.cardItems, filteredProduct];

      PrContext.showCardCount();
    }
  };

  return (
    <>
      <FilterProduct></FilterProduct>
      <Divider orientation='horizontal' flexItem sx={{ margin: "20px" }} />
      <Grid
        container
        rowSpacing={1}
        sx={{ flexDirection: "row", padding: "16px 36px" }}
      >
        {loadData.map((product) => (
          <Grid item xs={3} md={3}>
            <ProductCard
              id={product.id}
              key={product.id}
              productName={product.name}
              model={product.Model}
              img={product.img}
              price={product.price}
              type={product.type}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Product;
