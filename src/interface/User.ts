export default interface User {
  name: string
  level: string
  status: UserEventStatus
  imgSrc: string
}

export type UserEventStatus = {
  signedUp: boolean
  lookingForRide: boolean
  lookingForPartner: boolean
}
