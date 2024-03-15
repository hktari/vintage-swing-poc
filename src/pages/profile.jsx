import React, { useState } from "react"
import Layout from "../components/Layout"
import {
  Avatar,
  Box,
  Container,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material"
import { signedInUser } from "../user"

const Profile = ({ location }) => {
  const [type, setType] = useState("follower")
  const onChange = ev => {
    setType(ev.target.value)
  }

  return (
    <Container>
      <Avatar
        alt={signedInUser.name}
        src={signedInUser.imgSrc}
        sx={{
          width: "150px",
          height: "150px",
          margin: "0 auto",
          marginTop: "75px",
          borderWidth: "5px",
          borderStyle: "solid",
          borderColor: "primary.main",
        }}
      />{" "}
      <Box textAlign={"center"} sx={{ mt: 2 }}>
        <Typography variant="h4" component="h2">
          {signedInUser.name}
        </Typography>
        <Typography variant="h6">{signedInUser.level}</Typography>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select id="type" value={type} onChange={onChange} autoWidth>
            <MenuItem value={"lead"}>Lead</MenuItem>
            <MenuItem value={"follower"}>Follower</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="text.body"
            component="p"
            sx={{
              maxWidth: "450px",
              margin: "0 auto",
              lineHeight: "1.75rem",
            }}
          >
            {signedInUser.description}
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Profile
