import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"

const textCellClassNames = "col fs-3 d-flex flex-column justify-content-center text-center"
const textCellStyle = {
  // flexBasis: "25%",
}

const UserListItem = ({ imgSrc, name, level, status }) => (
  <div className="row my-2 border border-2 border-dark rounded">
    <div className="col ps-0">
      <img
        className="rounded"
        style={{ objectFit: "cover" }}
        width={75}
        alt="user avatar"
        src={imgSrc}
      />
    </div>

    <div className={textCellClassNames} style={textCellStyle}>
      {name}
    </div>
    <div className={textCellClassNames} style={textCellStyle}>
      {level}
    </div>
    <div className={textCellClassNames} style={textCellStyle}>
      {status}
    </div>
  </div>
)

export default UserListItem
