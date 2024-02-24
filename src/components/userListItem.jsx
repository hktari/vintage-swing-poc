import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"

const textCellClassNames = "fs-3 px-2 basis-30"
const textCellStyle = {
  flexBasis: "25%",
}

const UserListItem = ({ imgSrc, name, level, status }) => (
  <div className="d-flex align-items-center justify-content-between w-100">
    <img
      className="rounded"
      style={{ objectFit: "cover" }}
      width={50}
      height={50}
      alt="user avatar"
      src={imgSrc}
    />
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
