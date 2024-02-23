import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "mdb-react-ui-kit/dist/css/mdb.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Links from "../components/links"

import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  maxWidth: 1080,
}

const infoTableStyle = {
  borderCollapse: "seperate",
  borderSpacing: "50px 50px",
}

const rowHeadingStyle = {
  fontWeight: 600,
  padding: "8px 16px",
}

const IndexPage = () => (
  <Layout>
    <MDBContainer>
      <h1 style={headingStyles}>Preplesavanje Petek 24.2</h1>
      <div className="w-100 d-flex justify-content-center">
        <table
          className="border-top border-bottom border-2 border-dark"
          style={infoTableStyle}
        >
          <tr>
            <td style={rowHeadingStyle}>
              <h3 className="mb-0"> KJE ?</h3>
            </td>
            <td className="fs-4">SWING PLAC LJ</td>
          </tr>
          <tr>
            <td style={rowHeadingStyle}>
              <h3 className="mb-0">KDAJ ?</h3>{" "}
            </td>
            <td className="fs-4">20:00</td>
          </tr>
          <tr>
            <td style={rowHeadingStyle}>
              <h3 className="mb-0">CENA</h3>
            </td>
            <td className="fs-4">7€ | 12€ po 21:00</td>
          </tr>
        </table>
      </div>

      <hr />
    </MDBContainer>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <>
    <Seo title="Home" />
    <Links />
  </>
)

export default IndexPage
