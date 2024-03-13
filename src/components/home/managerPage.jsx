import React from "react"
import users from "../../../content/unverified-users.json"
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
} from "@mui/material"
const ManagerPage = ({ location, data }) => {
  return (
    <Container sx={{ py: 4 }}>
      {" "}
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
                    <IconButton edge="end" aria-label="verify" size="large">
                      <CheckCircleIcon fontSize="20px" color="success" />
                    </IconButton>
                    <IconButton edge="end" aria-label="remove" size="large">
                      <RemoveCircleOutlineIcon fontSize="20px"  />
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
    </Container>
  )
}

export default ManagerPage
