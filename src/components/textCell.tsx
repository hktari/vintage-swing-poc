import React from "react"

type Props = {
  children: JSX.Element
}
export const textCellClassNames =
  "fs-5 d-flex justify-content-center align-items-center h-100 text-center"
export const textCellStyle = {
  // flexBasis: "25%",
}

const TextCell = ({ children }: Props) => {
  return (
    <div className={textCellClassNames} style={textCellStyle}>
      {children}
    </div>
  )
}

export default TextCell
