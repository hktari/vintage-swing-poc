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
  marginBottom: 64,
  maxWidth: 1080,
}
const headingAccentStyles = {
  color: "#663399",
}

const infoRowHeader = {
  fontSize: "2em",
}

const IndexPage = () => (
  <Layout>
    <MDBContainer>
      <h1 style={headingStyles}>
        Preplesavanje Petek 24.2
        <br />
        <span style={headingAccentStyles}>
          — you just integrated MDB React with Gatsby! 🎉🎉🎉
        </span>
      </h1>
      <hr />
      <MDBRow className="border-top border-2 border-dark p-2">
        <MDBCol>
          <h3 className="text-italic" style={infoRowHeader}>
            KJE ?
          </h3>
        </MDBCol>
        <MDBCol>
          <div className="fs-2">SWING PLAC LJ</div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <h3 className="text-bold" style={infoRowHeader}>
            KDAJ ?
          </h3>
        </MDBCol>
        <MDBCol>
          <div className="fs-2">20:00</div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <h3 className="text-bold" style={infoRowHeader}>
            CENA{" "}
          </h3>
        </MDBCol>
        <MDBCol>
          <div className="fs-2">7€ | 12€ po 21:00</div>
        </MDBCol>
      </MDBRow>

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
