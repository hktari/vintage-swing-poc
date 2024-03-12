import * as React from "react"
import { Link } from "gatsby"
import { Box } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <Box
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        bgcolor: "primary.main",
      }}
    >
      <img src={logo} height={50} alt="vintage swing logo" />
      <Box sx={{ height: "75px" }} color="secondary"></Box>
    </Box>
  </header>
)

export default Header
