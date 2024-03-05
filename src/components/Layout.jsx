/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { useStaticQuery, graphql } from "gatsby"

// TODO:
// import "../material.scss"

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
    <Box sx={{ pb: 7 }} ref={ref}>
      {" "}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{ width: 500 }}
          value={selectedTab}
          onChange={handleChange}
        >
          <BottomNavigationAction label="Dogodki" icon={<GroupsIcon />} />
          <BottomNavigationAction label="Račun" icon={<AccountCircleIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export default Layout
