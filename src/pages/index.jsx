import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const EventsPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div>EventsPage</div>
      <Link to="/events/test">
        event detail
      </Link>
    </Layout>
  )
}

export default EventsPage
