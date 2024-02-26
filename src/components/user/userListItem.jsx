import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import TextCell from "../textCell"

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
      <TextCell>{name}</TextCell>
    </div>
    <div className="col-3">
      <TextCell>{level}</TextCell>
    </div>
    <div className="col-3">
      <TextCell>{status}</TextCell>
    </div>
  </div>
)

export default UserListItem
