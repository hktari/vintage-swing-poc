import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Link from "../components/Link"
import Layout from "../components/Layout"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

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
      </Container>
    </Layout>
  )
}
