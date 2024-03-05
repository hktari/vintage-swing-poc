import React from "react"

import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Avatar from "@mui/material/Avatar"
import MessageIcon from "@mui/icons-material/Message"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { Box } from "@mui/material"

const DriversTable = () => {
  function createData(
    driverName,
    driverImgSrc,
    departure,
    arrival,
    availableSeats
  ) {
    return { driverName, driverImgSrc, departure, arrival, availableSeats }
  }

  const rows = [
    createData(
      "Marko",
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "17:00 Celje",
      "00:00 Celje",
      2
    ),
    createData(
      "Vesna",
      "https://plus.unsplash.com/premium_photo-1683121769247-7824fdc324de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      "19:00 Kranj",
      "01:00 Kranj",
      1
    ),
  ]

  const TableHeadCell = ({ children }) => (
    <TableCell align="center">
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        {" "}
        {children}
      </Typography>
    </TableCell>
  )

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableHeadCell>Voznik</TableHeadCell>
            <TableHeadCell>Odhod</TableHeadCell>
            <TableHeadCell>Prihod</TableHeadCell>
            <TableHeadCell>Št. prostih mest</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <IconButton aria-label="message">
                  <MessageIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection={"column"}
                >
                  {" "}
                  <Avatar alt={row.name} src={row.driverImgSrc} />
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    {row.driverName}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="center">{row.departure}</TableCell>
              <TableCell align="center">{row.arrival}</TableCell>
              <TableCell align="center">{row.availableSeats}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DriversTable
