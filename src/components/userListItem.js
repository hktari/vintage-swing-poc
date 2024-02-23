import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"

const UserListItem = ({ imgSrc, name, level, status }) => (
  <div>
    <GatsbyImage width={50} height={50} alt="user avatar" src={imgSrc} />
  </div>
)

export default UserListItem
