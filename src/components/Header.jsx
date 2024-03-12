import * as React from "react"
import { Link } from "gatsby"
import { Box, IconButton } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import logo from "../images/logo.png"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import MenuIcon from "@mui/icons-material/Menu"

const Header = ({ siteTitle }) => {
  const topLevelLocation = true

  return (
    <header>
      <Box
        sx={{
          py: 2,
          px: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "primary.main",
          height: "75px",
        }}
      >
        {topLevelLocation ? (
          <IconButton aria-label="side menu" color="primary" size="large">
            <MenuIcon sx={{color: 'primary.contrastText'}}/>
          </IconButton>
        ) : (
          <IconButton aria-label="navigate back">
            <ArrowBackIosIcon sx={{color: 'primary.contrastText'}}/>
          </IconButton>
        )}

        <img src={logo} height={50} alt="vintage swing logo" />
      </Box>
    </header>
  )
}

export default Header
