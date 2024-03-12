/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { useStaticQuery, graphql } from "gatsby"

// TODO:
// import "../material.scss"

import "./layout.module.css"

import Header from "./Header"
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material"
import React, { useEffect, useState } from "react"

import AccountCircleIcon from "@mui/icons-material/AccountCircle"

import GroupsIcon from "@mui/icons-material/Groups"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { lime, purple } from "@mui/material/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5733",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [selectedTab, setSelectedTab] = useState(0)
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0
    // setMessages(refreshMessages())
  }, [selectedTab])

  const ref = React.useRef(null)

  return (
    <ThemeProvider theme={theme}>
      <Box ref={ref}>
        {" "}
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Box sx={{ pb: 7 }}>
          <main>{children}</main>
        </Box>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation value={selectedTab} onChange={handleChange}>
            <BottomNavigationAction label="Dogodki" icon={<GroupsIcon />} />
            <BottomNavigationAction
              label="Račun"
              icon={<AccountCircleIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </ThemeProvider>
  )
}

export default Layout
