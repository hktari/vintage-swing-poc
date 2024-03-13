import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Layout from "../../components/Layout"

import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemText from "@mui/material/ListItemText"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Grid from "@mui/material/Grid"
import CallIcon from "@mui/icons-material/Call"

import users from "../../../content/users.json"
import Section from "../../components/Section"
import DriversTable from "../../components/DriversTable"
import { dateAsString } from "../../util/date"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { Button } from "@mui/material"
import SignUpModal from "../../components/events/signUpModal"
import { useState } from "react"
import { useUser } from "../../context/userContextProvider"

export default function EventDetailPage({ location, data }) {
  const { user: signedInUser } = useUser()
  const [signedUpStatus, setSignedUpStatus] = useState(null)
  const [signUpModalOpen, setSignUpModalOpen] = React.useState(false)

  const event = data.event
  const isOfferingRide = false

  const onSignUp = () => {
    setSignUpModalOpen(true)
  }
  const onSignUpSubmit = newStatus => {
    setSignedUpStatus(newStatus)
  }

  const isSignedUp = signedUpStatus !== null

  return (
    <Layout location={location}>
      <SignUpModal
        open={signUpModalOpen}
        setOpen={setSignUpModalOpen}
        onSubmit={onSignUpSubmit}
        statusIn={signedUpStatus}
      />
      <Container maxWidth="sm" sx={{ pb: 2 }}>
        <GatsbyImage image={data.eventImage?.gatsbyImageData} />
        <Typography variant="h4" component="h1" sx={{ mt: 4 }}>
          {event.title}
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Lokacija{" "}
                  </Typography>
                </TableCell>
                <TableCell align="right">{event.location}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Datum{" "}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {dateAsString(new Date(event.date))}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Cena{" "}
                  </Typography>
                </TableCell>
                <TableCell align="right">{event.price}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body">{event.description}</Typography>
        </Box>

        <Section title={"Prijavljeni"}>
          <List dense={false}>
            {users.map(user => (
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <CallIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar alt={user.name} src={user.imgSrc} />
                </ListItemAvatar>
                <ListItemText primary={user.name} secondary={user.level} />
                <ListItemText primary={signedUpStatus} />
              </ListItem>
            ))}

            {isSignedUp && (
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt={signedInUser.name} src={signedInUser.imgSrc} />
                </ListItemAvatar>
                <ListItemText
                  primary={signedInUser.name}
                  secondary={signedInUser.level}
                />
                <ListItemText primary={signedUpStatus} />
              </ListItem>
            )}
          </List>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
              sx={{ fontWeight: "bold" }}
              variant={isSignedUp ? "outlined" : "contained"}
              onClick={onSignUp}
            >
              {isSignedUp ? "Uredi Prijavo" : "Prijavi se"}
            </Button>
          </Box>
        </Section>

        <Section title={"Prevozi"}>
          <DriversTable />
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button variant="primary">
              {isOfferingRide ? "Uredi Prevoz" : "Ponudi Prevoz"}{" "}
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query EventDetailPage($imageName: String, $eventId: String) {
    eventImage: imageSharp(fluid: { originalName: { eq: $imageName } }) {
      id
      gatsbyImageData(height: 350)
    }
    event: eventsJson(jsonId: { eq: $eventId }) {
      id: jsonId
      description
      date
      image
      location
      title
      price
    }
  }
`
