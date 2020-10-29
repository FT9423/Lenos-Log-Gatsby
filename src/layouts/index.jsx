import React from "react"

import "../assets/styles/styles.scss"
import Header from "./header"

const Layouts = ({ children, location }) => {
  return (
    <>
      <Header location={location} />
      <main>{children}</main>
    </>
  )
}

export default Layouts
