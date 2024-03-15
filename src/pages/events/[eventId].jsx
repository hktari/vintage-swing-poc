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
import users from "../../../content/users.json"
import Section from "../../components/Section"
import DriversTable from "../../components/DriversTable"
import { dateAsString } from "../../util/date"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { Button } from "@mui/material"
import SignUpModal from "../../components/events/signUpModal"
import { useState } from "react"
import { signedInUser } from "../../user"
import EventListItem from "../../components/events/eventListItem"
import useModal from "../../hooks/useModal"
import OfferRideModal from "../../components/events/offerRideModal"

import { navigate } from "gatsby"

export default function EventDetailPage({ location, data }) {
  const event = data.event

  const isLoggedIn = location.state?.isLoggedIn

  const onSignUp = () => {
    signUpModal.setIsOpen(true)
  }
  const signUpModal = useModal()
  const offerRideModal = useModal()

  const isSignedUp = signUpModal.context !== null
  const isOfferingRide = offerRideModal.context !== null

  return (
    <Layout location={location}>
      <SignUpModal
        open={signUpModal.isOpen}
        setOpen={signUpModal.setIsOpen}
        onSubmit={signUpModal.onSubmit}
        statusIn={signUpModal.context}
      />
      <OfferRideModal
        open={offerRideModal.isOpen}
        setOpen={offerRideModal.setIsOpen}
        onSubmit={offerRideModal.onSubmit}
        statusIn={offerRideModal.context}
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
              <EventListItem user={user} />
            ))}

            {isSignedUp && (
              <EventListItem
                user={{
                  ...signedInUser,
                  status: { ...signUpModal.context },
                }}
                hideCallAction
              />
            )}
          </List>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            {isLoggedIn ? (
              <Button
                variant={isSignedUp ? "outlined" : "contained"}
                onClick={onSignUp}
              >
                {isSignedUp ? "Uredi Prijavo" : "Prijavi se"}
              </Button>
            ) : (
              <Button variant="contained" onClick={() => navigate("/login")}>
                Vpiši se
              </Button>
            )}
          </Box>
        </Section>

        <Section title={"Prevozi"}>
          <DriversTable />
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
              disabled={!isLoggedIn}
              variant="contained"
              onClick={() => offerRideModal.setIsOpen(true)}
            >
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
