import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import { textCellClassNames, textCellStyle } from "./common"

const UserListItem = ({ imgSrc, name, level, status }) => (
  <div className="row my-2 border border-2 border-dark rounded">
    <div className="col-4 ps-0">
      <img
        className="rounded"
        style={{ objectFit: "cover" }}
        width={75}
        alt="user avatar"
        src={imgSrc}
      />
    </div>

    <div className="col-2">
      <div className={textCellClassNames} style={textCellStyle}>
        <span>{name}</span>
      </div>
    </div>
    <div className="col-3">
      <div className={textCellClassNames} style={textCellStyle}>
        {level}
      </div>
    </div>
    <div className="col-3">
      <div className={textCellClassNames} style={textCellStyle}>
        {status}
      </div>
    </div>
  </div>
)

export default UserListItem
