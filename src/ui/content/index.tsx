import * as React from "react"

import { AccordionContent } from "./styles"
import { AccordionContext } from "../accordion"

export const Content: React.FC = (props: any) => {
  const ref = React.useRef<any>()

  const { className, children } = props
  const { isOpen, isAnimated } = React.useContext<any>(AccordionContext)

  return (
    <AccordionContent
      {...props}
      ref={ref}
      isOpen={isOpen}
      isAnimated={isAnimated}
      className={`${className} accordion-content ${isOpen && "isOpen"}  `}
    >
      {children}
    </AccordionContent>
  )
}
