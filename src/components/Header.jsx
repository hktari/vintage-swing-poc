import * as React from "react"
import { Link } from "gatsby"
import { Box, IconButton, Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import logo from "../images/logo.png"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import MenuIcon from "@mui/icons-material/Menu"
import { navigate } from "gatsby"

const Header = ({ siteTitle, location }) => {
  const matchNestedUri = /\/\w*(\/\w+)+/
  const topLevelLocation = !location.pathname.match(matchNestedUri)

  const onNavigateBack = () => {
    navigate("/", { state: { ...location.state } })
  }

  return (
    <header style={{ position: "relative" }}>
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
        <Box>
          {!topLevelLocation && (
            <IconButton aria-label="navigate back" onClick={onNavigateBack}>
              <ArrowBackIosIcon sx={{ color: "primary.contrastText" }} />
            </IconButton>
          )}
        </Box>
        <img src={logo} height={50} alt="vintage swing logo" />
      </Box>

      <Typography
        variant="subtitle"
        component={"span"}
        color={"lightgray"}
        sx={{
          opacity: 0.375,
          position: "absolute",
          top: "15px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        DEMO
      </Typography>
    </header>
  )
}

export default Header
