import * as React from "react"

import { AccordionContext } from "../accordion"

export const Trigger: React.FC<any> = (props) => {
  const { className } = props

  const { isOpen, toggle, animated, index } = React.useContext<any>(AccordionContext)

  return (
    <div
      {...props}
      className={`accordion-trigger trigger-id-${index} ${isOpen ? "isOpen" : ""}${
        className ? " " + className : ""
      }`}
      onClick={toggle}
      style={{ cursor: "pointer", transition: animated ? "0.3s" : 0 }}
    />
  )
}
