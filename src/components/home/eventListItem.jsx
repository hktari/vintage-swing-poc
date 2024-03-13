import React from "react"
import { dateAsString } from "../../util/date"
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

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
export default EventListItem
