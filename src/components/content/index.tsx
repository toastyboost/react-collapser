import * as React from "react"

import { AccordionContext } from "../accordion"

export const Content: React.FC = (props: any) => {
  const { children, className } = props

  const { isOpen, animated } = React.useContext<any>(AccordionContext)

  return (
    <div
      {...props}
      className={`accordion-content ${className ? className : ""} ${isOpen && "isOpen"}`}
      style={{
        overflow: isOpen ? "auto" : "hidden",
        maxHeight: isOpen ? "100px" : 0,
        transition: animated ? "0.3s" : "none"
      }}
    >
      {children}
    </div>
  )
}
