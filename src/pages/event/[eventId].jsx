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

export default function EventDetailPage({ location }) {

  return (
    <Layout>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" sx={{ mt: 4 }}>
          Preplesavanje Petek
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
                <TableCell align="right">SWING STUDIO LJ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Datum{" "}
                  </Typography>
                </TableCell>
                <TableCell align="right">24.2.2024 ob 20:00</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Cena{" "}
                  </Typography>
                </TableCell>
                <TableCell align="right">7€ | 12€ po 21:00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
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
