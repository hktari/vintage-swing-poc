import React from "react"
import User from "../../interface/User"
import TextCell from "../textCell"

type Props = {
  firstUser: User
  secondUser: User
  status: string
}

const UserCoupleListItem = ({ firstUser, secondUser, status }: Props) => {
  return (
    <div className="row my-2 border border-2 border-dark rounded">
      <div className="col-4 ps-0">
        <div className="d-flex">
          <img
            style={{
              objectFit: "cover",
              borderRadius:
                "var(--mdb-border-radius) 0px 0px var(--mdb-border-radius)",
            }}
            width={75}
            alt="user avatar"
            src={firstUser.imgSrc}
          />
          <img
            style={{
              objectFit: "cover",
              borderRadius:
                "0px var(--mdb-border-radius) var(--mdb-border-radius) 0px",
            }}
            width={75}
            alt="user avatar"
            src={secondUser.imgSrc}
          />
        </div>
      </div>

      <div className="col-2">
        <TextCell>
          <>
            {" "}
            {firstUser.name}
            <br />
            in
            <br />
            {secondUser.name}
          </>
        </TextCell>
      </div>
      <div className="col-3">{/* level */}</div>
      <div className="col-3">
        <TextCell>{status}</TextCell>
      </div>
    </div>
  )
}

export default UserCoupleListItem