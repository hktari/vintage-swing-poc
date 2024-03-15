import React from "react"

import Divider from "@mui/material/Divider"
import Layout from "../components/Layout"
import {
  Container,
  ListItemIcon,
  Paper,
  ListItem,
  List,
  ListItemText,
  ListItemButton,
  TextField,
  Typography,
  Box,
  Button,
} from "@mui/material"
import GoogleIcon from "@mui/icons-material/Google"
import FacebookIcon from "@mui/icons-material/Facebook"
import AppleIcon from "@mui/icons-material/Apple"
import Link from "../components/Link"
import { navigate } from "gatsby"

const Login = ({ location }) => {
  const SocialLoginListItem = ({ icon, text, onClick }) => (
    <ListItem disablePadding>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItemButton>
    </ListItem>
  )

  const onLogin = () => {
    navigate("/events/2F537FEB-766A-468E-A7C7-A0A0E69CA8A2/", {
      state: { isLoggedIn: true },
    })
  }

  return (
    <Layout location={location}>
      <Container sx={{ height: "100vh" }}>
        <Box
          sx={{ height: "100%", py: 5, px: 4 }}
          display="flex"
          flexDirection="column"
          justifyContent="start"
        >
          <Typography variant="h4" textAlign={"center"}>
            Login
          </Typography>
          <Paper
            sx={{
              py: 1,
              px: 2,
              mt: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1 },
                display: "flex",
                flexDirection: "column",
              }}
              noValidate
              autoComplete="off"
              onSubmit={ev => {
                ev.preventDefault()
                onLogin()
              }}
            >
              <TextField
                label="Email"
                id="outlined-size-normal"
                type="email"
                defaultValue="janez.novak@mail.com"
              />
              <TextField
                label="Geslo"
                id="outlined-size-normal"
                hidden
                type="password"
                defaultValue="secret"
              />
              <Button
                size="large"
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Vpis
              </Button>
            </Box>{" "}
            <List dense={false} sx={{ mt: 2 }}>
              <SocialLoginListItem
                icon={<GoogleIcon />}
                text={"Vpis z Google"}
                onClick={onLogin}
              />
              <SocialLoginListItem
                icon={<FacebookIcon />}
                text={"Vpis z Facebook"}
                onClick={onLogin}
              />
            </List>
          </Paper>
        </Box>
      </Container>
    </Layout>
  )
}

export default Login
