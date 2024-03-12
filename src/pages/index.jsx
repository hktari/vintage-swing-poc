import { Link } from "gatsby"
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

import events from "../data/events.json"

const EventListItem = ({ event }) => {
  const eventDate = new Date(event.date)
  const formattedDateTimeString = `${eventDate.getDate()}.${eventDate.getMonth()}.${eventDate.getFullYear()} ob ${eventDate
    .toTimeString()
    .substring(0, 5)}`

  return (
    <ListItemButton href={`/events/${event.id}`} state={{ event }}>
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

const EventsPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Container sx={{ px: 2, py: 4 }}>
        <Typography variant="h4" component="h1">
          Dogodki
        </Typography>
        <List>
          {events.map(event => (
            <EventListItem event={event} />
          ))}
        </List>
      </Container>
    </Layout>
  )
}

export default EventsPage
