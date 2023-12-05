import { Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../components/home/Product";
import HeaderComponent from "../components/home/HeaderComponent";
import { Box } from "@mui/material";

function HomePage() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Box sx={{ width: "100%" }}>
        <Product />
      </Box>
    </>
  );
}

export default HomePage;
