import React from "react";
import Box from "@mui/material/Box";
import Card from "../Styles/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const bull = (
  <Box
    component='span'
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
function ProductCard({ id, productName, img, price, model, type }) {
  const navigate = useNavigate();

  return (
    <>
      <Card
        id={id}
        image={img}
        title={productName}
        price={price}
        description={model}
        type={type}
      ></Card>
    </>
  );
}

export default ProductCard;
