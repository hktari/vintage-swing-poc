import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Layout from "../components/Layout"

import Table from "@mui/material/Table"
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

import users from "../../content/users.json"

export default function Index() {
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
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Lokacija{" "}
                  </Typography>
                </TableCell>
                <TableCell align="right">SWING STUDIO LJ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Datum{" "}
                  </Typography>
                </TableCell>
                <TableCell align="right">24.2.2024 ob 20:00</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Cena{" "}
                  </Typography>
                </TableCell>
                <TableCell align="right">7€ | 12€ po 21:00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
            Prijavljeni
          </Typography>
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
          </List>
        </Grid>
      </Container>
    </Layout>
  )
}
