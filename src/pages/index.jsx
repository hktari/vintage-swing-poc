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

import { dateAsString } from "../util/date"

const EventListItem = ({ event }) => {
  const eventDate = new Date(event.date)
  const formattedDateTimeString = dateAsString(eventDate)

  return (
    <ListItemButton href={`/events/${event.id}`}>
      <ListItemText
        primary={event.title}
        secondary={`${formattedDateTimeString} @ ${event.location}`}
      />
      <ListItemIcon>
        <ArrowForwardIosIcon />
      </ListItemIcon>
    </ListItemButton>
  )
}

const EventsPage = ({ location, data }) => {
  return (
    <Layout location={location}>
      <Container sx={{ px: 2, py: 4 }}>
        <Typography variant="h4" component="h1">
          Dogodki
        </Typography>
        <List>
          {data.allEventsJson.edges.map(edge => (
            <EventListItem key={edge.node.id} event={edge.node} />
          ))}
        </List>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
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
