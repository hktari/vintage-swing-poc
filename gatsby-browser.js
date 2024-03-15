import React from "react"
import Layout from "./src/components/Layout"

// You can delete this file if you're not using it

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
