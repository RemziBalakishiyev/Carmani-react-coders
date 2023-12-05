import { Box, Typography, styled } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
export const UiNavbar = styled("nav")(({ theme }) => ({
  width: "100%",
  height: "150px",
  display: "flex",
  justifyContent: "space-between",
  padding: "16px 36px",
  alignItems: "center",
  background: " linear-gradient(284deg, #F1F3FC 0%, #F7F7FB 100%)",
}));

export const LogoName = styled("img")(({ theme }) => ({
  width: "234px",
  height: "200px",
}));

export const MenuList = styled("ul")(({ theme }) => ({
  width: "30%",
  display: "flex",
  alignItems: "center",
  height: "150px",
  gap: "32px",
}));

export const ListItem = styled("li")(({ theme }) => ({
  listStyle: "none",
}));

export const LinkUi = styled(Link)(({ theme }) => ({
  color: "#1D1E21",
  fontSize: "16px",
  cursor: "pointer",
}));

export const NavLinkUi = styled(NavLink)(({ theme, activeted }) => ({
  fontSize: "16px",
  cursor: "pointer",
  color: "#1D1E21",
  textDecoration: "none",
  fontSize: "'Poppins', sans-serif;",
}));

export const RegisterNavUi = styled(Box)(({ theme }) => ({
  width: "20%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "10px",
}));

export const CardUi = styled(Box)(({ theme }) => ({
  borderRradius: "12px",
  border: "1px solid #EBEBEB",
  width: "272px",
  height: "400px",
  background: "#FFF",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "30px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
}));

export const CardHeaderUi = styled("div")(({ theme }) => ({
  width: "100%",
  height: "200px",
  padding: "10px",
}));

export const CardImageUi = styled("img")(({ theme }) => ({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  objectPosition: "center",
}));

export const CardBodyUi = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
}));

export const CardTitleUi = styled(Typography)(({ theme }) => ({
  variant: "h4",
  color: "#141414",
  textAlign: "center",
  fontSize: "18px",
  padding: "10px",
}));

export const CardFooterUi = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  padding: "10px",
  variant: "h4",
}));

export const BannerImageUi = styled("img")(({ theme, img }) => ({
  img: img,
  width: "100%",
}));
