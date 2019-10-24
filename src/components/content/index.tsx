import * as React from "react"

import { AccordionContext } from "../accordion"

export const Content: React.FC = (props: any) => {
  const { className, children } = props

  const { isOpen, animated, index } = React.useContext<any>(AccordionContext)

  return (
    <div
      {...props}
      className={`accordion-content content-id-${index} ${className ? " " + className : ""}${
        isOpen ? "isOpen" : ""
      }`}
      style={{
        overflow: isOpen ? "auto" : "hidden",
        maxHeight: isOpen ? "initial" : 0,
        transition: animated ? "0.3s" : 0
      }}
    >
      {React.Children.map(children, (child, i) => {
        return typeof child.type === "function"
          ? React.cloneElement(child, { className: "accordion-nested" })
          : child
      })}
    </div>
  )
}
