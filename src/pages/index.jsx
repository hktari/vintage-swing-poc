import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const EventsPage = () => {
  return (
    <Layout>
      <div>EventsPage</div>
      <Link to="/event/test" state={{eventId: 'test'}}>event detail</Link>
    </Layout>
  )
}

export default EventsPage
