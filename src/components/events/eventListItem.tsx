import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material"
import React from "react"

import CallIcon from "@mui/icons-material/Call"
import User, { UserEventStatus } from "../../interface/User"

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
      <ListItemText
        primary={user.status.lookingForRide ? "iščem prevoz" : ""}
        primaryTypographyProps={{ variant: "body2" }}
        secondaryTypographyProps={{ variant: "body2", color: "black" }}
        secondary={user.status.lookingForPartner ? "iščem partnerja" : ""}
        sx={{ textAlign: "start" }}
      />
    </ListItem>
  )
}

export default EventListItem
