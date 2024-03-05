import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Link from "../components/Link"
import Layout from "../components/Layout"

export default function Index() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI Gatsby example
          </Typography>
          <Link to="/">Go to the main page</Link>
        </Box>
      </Container>
    </Layout>
  )
}
