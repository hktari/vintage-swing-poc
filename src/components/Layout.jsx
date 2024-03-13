/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { useStaticQuery, graphql, Link } from "gatsby"

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

import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"
import { LinkProps } from "@mui/material/Link"

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props
  // Map href (Material UI) -> to (react-router)
  return <GatsbyLink ref={ref} to={href} {...other} />
})

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  palette: {
    primary: {
      main: "#a02A00",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#f6de7a",
    },
  },
})

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          managerMode
        }
      }
    }
  `)

  const { managerMode } = data.site.siteMetadata

  const isEventsTab =
    location?.pathname === "/" || location?.pathname.includes("events")

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0
    // setMessages(refreshMessages())
  }, [isEventsTab])

  const ref = React.useRef(null)

  return (
    <ThemeProvider theme={theme}>
      <Box ref={ref}>
        <Header
          location={location}
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />

        <Box sx={{ pb: 7 }}>
          <main>{children}</main>
        </Box>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation value={isEventsTab ? 0 : 1}>
            <BottomNavigationAction
              value={0}
              href="/"
              label="Dogodki"
              icon={<GroupsIcon />}
            />
            <BottomNavigationAction
              value={1}
              href="/profile"
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
