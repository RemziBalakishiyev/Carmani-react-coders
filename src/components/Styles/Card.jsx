import React, { useContext } from "react";

import {
  CardUi,
  CardHeaderUi,
  CardImageUi,
  CardBodyUi,
  CardTitleUi,
  CardFooterUi,
} from "../../styles/style";
import { Button, Typography } from "@mui/material";
import { ProductContext } from "../../store/product-context";
import { useNavigate } from "react-router-dom";
function Card({ id, image, title, price, description, type }) {
  const PrContext = useContext(ProductContext);
  const navigate = useNavigate();
  const onHandleCard = (id) => {
    PrContext.addCard(id);
  };

  const onNavigate = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };
  return (
    <CardUi onClick={() => onNavigate(id)}>
      <CardHeaderUi>
        <CardImageUi src={image} />
      </CardHeaderUi>
      <CardBodyUi>
        <CardTitleUi>{title}</CardTitleUi>
        <Typography variant='body1' sx={{ padding: "10px" }}>
          {description}
        </Typography>
        <CardFooterUi>
          <Typography variant='h6'>
            {price} - {type}
          </Typography>

          <Button
            variant='contained'
            color='warning'
            onClick={() => onHandleCard(id)}
          >
            Add Card
          </Button>
        </CardFooterUi>
      </CardBodyUi>
    </CardUi>
  );
}

export default Card;
