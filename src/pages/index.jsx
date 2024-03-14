import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

import yn from "yn"
import { dateAsString } from "../util/date"
import HomePage from "../components/home/homePage"
import ManagerPage from "../components/home/managerPage"

const EventsPage = ({ location, data }) => {
  const isManageMode = yn(data.site.siteMetadata.managerMode)
  return (
    <Layout location={location}>
      {isManageMode ? (
        <ManagerPage location={location} data={data} />
      ) : (
        <HomePage location={location} data={data} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        managerMode
      }
    }

    allEventsJson {
      edges {
        node {
          id: jsonId
          location
          title
          date
        }
      }
    }
  }
`

export default EventsPage
