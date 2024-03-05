import React from "react"

import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const Section = ({ title, children }) => {
  return (
    <Grid item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
        {title}
      </Typography>
      {children}
    </Grid>
  )
}

export default Section
