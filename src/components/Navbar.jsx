import React, { useContext, useRef, useState, memo, useCallback } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { pink } from "@mui/material/colors";
import {
  UiNavbar,
  LogoName,
  MenuList,
  ListItem,
  LinkUi,
  NavLinkUi,
  RegisterNavUi,
} from "../styles/style.js";
import { Link } from "react-router-dom";
import carmaniLogo from "../assets/carmani.png";
import { Button, Typography } from "@mui/material";
import Basket from "./Basket.jsx";
import { ProductContext } from "../store/product-context.jsx";

const Navbar = function Navbar() {
  const PrContext = useContext(ProductContext);
  const [count, setCount] = useState(0);

  PrContext.showCardCount = useCallback(() => {
    setCount(PrContext.cardItems.length);
  }, [PrContext.cardItems.length]);

  const dialogRef = useRef();
  const handleOpen = () => {
    dialogRef.current.openHandle();
  };

  return (
    <>
      <Basket ref={dialogRef} title='Data' />
      <UiNavbar>
        <LogoName src={carmaniLogo} />
        <MenuList>
          <ListItem>
            <NavLinkUi to='/' end>
              Home Page
            </NavLinkUi>
          </ListItem>
          <ListItem>
            <NavLinkUi to='/category' end>
              Category Page
            </NavLinkUi>
          </ListItem>
          <ListItem>
            <NavLinkUi to='/productForm' end>
              Product Form
            </NavLinkUi>
          </ListItem>
        </MenuList>
        <RegisterNavUi>
          <Button variant='outlined' color='secondary'>
            Sign In
          </Button>

          <Button variant='contained' color='secondary'>
            Register
          </Button>
          <ShoppingBasketIcon
            onClick={handleOpen}
            sx={{ color: pink[500], fontSize: "22px", cursor: "pointer" }}
          ></ShoppingBasketIcon>
          <Typography variant='subtitle2'>{count}</Typography>
        </RegisterNavUi>
      </UiNavbar>
    </>
  );
};

export default Navbar;
