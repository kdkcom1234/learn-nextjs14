import { CSSProperties } from "react"

export default function Avartar() {
  const avatarStyle: CSSProperties = {
    border: "1px solid black",
    borderRadius: "50%",
    fontStyle: "normal",
    padding: "0.25rem",
  }

  return <i style={avatarStyle}>🐶</i>
}