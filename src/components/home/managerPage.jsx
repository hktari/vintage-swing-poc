import React, { useState } from "react"
import usersInitial from "../../../content/unverified-users.json"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded"
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline"
import {
  Container,
  IconButton,
  Avatar,
  ListItemAvatar,
  Divider,
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack,
  Button,
} from "@mui/material"
import EventListItem from "./eventListItem"
import ConfirmChoiceDialog from "../modal/confirmChoiceDialog"

const ManagerPage = ({ location, data }) => {
  const [users, setUsers] = useState(usersInitial)
  const [confirmationDialogContext, setConfirmationDialogContext] =
    useState(null)
  const [confirmationDialogMessage, setConfirmationDialogMessage] = useState()
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false)

  const removeUserFromList = user => {
    const usersUpdate = [...users]
    usersUpdate.splice(users.indexOf(user), 1)
    setUsers(usersUpdate)
  }

  const onConfirmUser = user => {
    setConfirmationDialogOpen(true)
    setConfirmationDialogContext(user)
    setConfirmationDialogMessage(`Potrdi uporabnika ${user.name} ?`)
  }
  const onRejectUser = user => {
    setConfirmationDialogOpen(true)
    setConfirmationDialogContext(user)
    setConfirmationDialogMessage(`Zavrni prijavo uporabnika ${user.name} ?`)
  }

  const onConfirmationDialogComplete = confirmed => {
    if (confirmed) {
      const user = confirmationDialogContext
      removeUserFromList(user)
    }
    setConfirmationDialogContext(null)
    setConfirmationDialogOpen(false)
  }

  return (
    <Container sx={{ py: 4 }}>
      {" "}
      <ConfirmChoiceDialog
        message={confirmationDialogMessage}
        open={confirmationDialogOpen}
        onChoiceMade={onConfirmationDialogComplete}
      />
      <Box component={"section"}>
        <Typography variant="h4" component="h2">
          Novi uporabniki
        </Typography>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {users.map(user => (
            <React.Fragment>
              <ListItem
                alignItems="flex-start"
                secondaryAction={
                  <Stack direction="horizontal" spacing="20px">
                    <IconButton
                      edge="end"
                      aria-label="verify"
                      size="large"
                      onClick={() => onConfirmUser(user)}
                    >
                      <CheckCircleIcon fontSize="20px" color="success" />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="remove"
                      size="large"
                      onClick={() => onRejectUser(user)}
                    >
                      <RemoveCircleOutlineIcon fontSize="20px" />
                    </IconButton>
                  </Stack>
                }
              >
                <ListItemAvatar>
                  <Avatar alt={user.name} src={user.imgSrc} />
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {user.email}
                      </Typography>
                      {" - " + user.mobile}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box component={"section"} sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2">
          Dogodki
        </Typography>

        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {data.allEventsJson.edges.map(edge => (
            <React.Fragment>
              <EventListItem key={edge.node.id} event={edge.node} />
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button variant="contained">Nov Dogodek</Button>
        </Box>
      </Box>
    </Container>
  )
}

export default ManagerPage
