import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import { BannerImageUi } from "../../styles/style";
import BannerCar from "../../assets/car1.png";
function HeaderComponent() {
  return (
    <Stack
      flexDirection={"row"}
      spacing={3}
      justifyContent={"center"}
      maxWidth={"100%"}
      sx={{
        background: "linear-gradient(284deg, #F1F3FC 0%, #F7F7FB 100%)",
        width: "100%",
        padding: "16px 36px",
      }}
    >
      <Box sx={{ width: "45%" }} height={400}>
        <Typography
          variant='h2'
          sx={{ color: "#1D1E21", fontSize: "64px", margin: "0" }}
        >
          Rent your favorite car in Easy steps.
        </Typography>
        <Typography variant='h2' sx={{ color: "#929395", fontSize: "18px" }}>
          Get a car wherever and whenever you need it with your iOS or Android
          device.
        </Typography>
      </Box>

      <Box sx={{ width: "45%" }}>
        {/* <BannerImageUi img={BannerCar} /> */}
        <img src={BannerCar} style={{ width: "100%" }} />
      </Box>
    </Stack>
  );
}

export default HeaderComponent;
