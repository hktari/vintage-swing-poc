import React from "react"
import Layout from "../components/Layout"
import {
  Container,
  ListItemIcon,
  Paper,
  ListItem,
  List,
  ListItemText,
  ListItemButton,
  Typography,
  Box,
} from "@mui/material"
import GoogleIcon from "@mui/icons-material/Google"
import FacebookIcon from "@mui/icons-material/Facebook"
import AppleIcon from "@mui/icons-material/Apple"

const Login = () => {
  const SocialLoginListItem = ({ icon, text, onClick }) => (
    <ListItem disablePadding>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItemButton>
    </ListItem>
  )

  return (
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
        <Paper sx={{ py: 1, px: 2, mt: 4 }}>
          <List dense={false}>
            <SocialLoginListItem icon={<GoogleIcon />} text={"Google"} />
            <SocialLoginListItem icon={<AppleIcon />} text={"Apple"} />
            <SocialLoginListItem icon={<FacebookIcon />} text={"Facebook"} />
          </List>
        </Paper>
      </Box>
    </Container>
  )
}

export default Login
