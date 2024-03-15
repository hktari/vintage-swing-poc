import React from "react"
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
import { dateAsString } from "../../util/date"
import EventListItem from "./eventListItem"
import { navigate } from "gatsby"

const HomePage = ({ location, data }) => {
  const onEventListItemClick = event => {
    navigate(`/events/${event.id}`, { state: { ...location.state } })
  }

  return (
    <Container sx={{ px: 2, py: 4 }}>
      <Typography variant="h4" component="h1">
        Dogodki
      </Typography>
      <List>
        {data.allEventsJson.edges.map(edge => (
          <EventListItem
            key={edge.node.id}
            event={edge.node}
            onButtonClick={onEventListItemClick}
          />
        ))}
      </List>
    </Container>
  )
}

export default HomePage
