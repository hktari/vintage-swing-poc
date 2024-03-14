import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material"
import React from "react"

import CallIcon from "@mui/icons-material/Call"
import User from "../../interface/User"

type Props = {
  user: User
  hideCallAction: boolean
}

const EventListItem = ({ user, hideCallAction = false }: Props) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          sx={{ visibility: hideCallAction ? "hidden" : "visible" }}
        >
          <CallIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar alt={user.name} src={user.imgSrc} />
      </ListItemAvatar>
      <ListItemText primary={user.name} secondary={user.level} />
      {user.status.lookingForRide && (
        <ListItemText primary="iščem prevoz" sx={{ textAlign: "start" }} />
      )}
      {user.status.lookingForPartner && (
        <ListItemText primary="iščem partnerja" sx={{ textAlign: "start" }} />
      )}
    </ListItem>
  )
}

export default EventListItem
