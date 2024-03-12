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

export default function EventDetailPage({ location, data }) {
  const event = data.event

  return (
    <Layout location={location}>
      <Container maxWidth="sm">
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
                <ListItemText primary={user.status} />
              </ListItem>
            ))}
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <CallIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar
                  alt={"Boštjan"}
                  src="https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D"
                />
              </ListItemAvatar>
              <ListItemAvatar>
                <Avatar
                  alt={"Vesna"}
                  src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D"
                />
              </ListItemAvatar>
              <ListItemText primary="Boštja in Vesna" secondary="začetnika" />
              <ListItemText primary="prideta" />
            </ListItem>
          </List>
        </Section>

        <Section title={"Prevozi"}>
          <DriversTable />
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
