import * as React from "react"

import { AccordionTrigger } from "./styles"
import { AccordionContext } from "../accordion"

export const Trigger: React.FC<any> = (props) => {
  const { className } = props
  const { isOpen, handleToggle } = React.useContext<any>(AccordionContext)

  return (
    <AccordionTrigger
      {...props}
      isOpen={isOpen}
      onClick={handleToggle}
      className={`${className} accordion-trigger ${isOpen && "isOpen"}`}
    />
  )
}
