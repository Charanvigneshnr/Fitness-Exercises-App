import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "150px", height: "75px" }} />
    </Stack>
    <a href="https://www.linkedin.com/in/charan-vignesh-nr">
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "28px", xs: "20px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
        fontStyle="italic"
        fontFamily="Ari"
      >
        Connect with me: Charan Vignesh N R
      </Typography>
    </a>
  </Box>
);

export default Footer;
