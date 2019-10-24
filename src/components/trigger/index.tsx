import * as React from "react"

import { AccordionContext } from "../accordion"

export const Trigger: React.FC<any> = (props) => {
  const { className } = props

  const { isOpen, toggle, animated } = React.useContext<any>(AccordionContext)

  return (
    <div
      {...props}
      className={`accordion-trigger ${isOpen && "isOpen"} ${className ? className : ""}`}
      onClick={toggle}
      style={{ cursor: "pointer", transition: animated ? "0.3s" : "none" }}
    />
  )
}
