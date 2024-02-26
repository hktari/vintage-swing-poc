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
import UserListItem from "../components/user/userListItem"
import UserCoupleListItem from "../components/user/userCoupleListItem"
import { textCellClassNames, textCellStyle } from "../components/user/common"
import TextCell from "../components/textCell"
import SignUpModal from "../components/signUpModal"

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

const HeadingTwo = ({ children }) => (
  <h2 className="mb-0 border-dark border-2 border d-inline p-1">{children}</h2>
)

const IndexPage = () => (
  <Layout>
    <MDBContainer>
      <h1 className="text-center" style={headingStyles}>
        Preplesavanje Petek 24.2
      </h1>
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

      <section className="mt-5">
        <HeadingTwo>PRIJAVLJENI</HeadingTwo>
        <div className="mt-4 ms-4 row">
          <div className="col-4 ps-0">{/* here is image */}</div>
          <div className="col-2 fw-bold fs-4 text-center">IME</div>
          <div className="col-3 fw-bold fs-4 text-center">NIVO</div>
          <div className="col-3 fw-bold fs-4 text-center">STANJE</div>
        </div>
        <div className="ms-4 mt-3">
          <UserListItem
            imgSrc="https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
            name={"Živa"}
            status={"išče prevoz"}
            level={"napredna"}
          />
          <UserListItem
            imgSrc="https://images.unsplash.com/photo-1599566147214-ce487862ea4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
            name={"Luka"}
            status={"nov uporabnik"}
            level={"začetnik"}
          />

          <UserCoupleListItem
            firstUser={{
              name: "Tatjana",
              level: "beginner",
              imgSrc:
                "https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
            }}
            secondUser={{
              name: "Boštjan",
              level: "beginner",
              imgSrc:
                "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
            }}
            status="prideta"
          />
        </div>

        <div className="text-center mt-4">
         <SignUpModal/>
        </div>
      </section>

      <hr className="my-5" />

      <section id="transportation">
        <HeadingTwo>PREVOZI</HeadingTwo>
        <div className="row text-center fw-bold mt-4">
          <div className="col"></div>
          <div className="col">VOZNIK</div>
          <div className="col">ODHOD</div>
          <div className="col">PRIHOD</div>
          <div className="col">ŠT.PROST MEST</div>
        </div>

        <div className="row text-center">
          <div className="col">
            <button className="rounded-circle bg-none border-2 border-dark fs-2">
              <i className="fa-solid fa-phone"></i>
            </button>
          </div>
          <div className="col">
            <TextCell>BOŠTJAN</TextCell>
          </div>
          <div className="col">
            <TextCell>
              17:00
              <br />
              CELJE
            </TextCell>
          </div>
          <div className="col">
            <TextCell>
              00:00 <br />
              CELJE
            </TextCell>
          </div>
          <div className="col">
            <TextCell>2</TextCell>
          </div>
        </div>
      </section>
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
