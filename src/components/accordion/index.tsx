import * as React from "react"

import { CollapsibleContext } from "../collapsible"

export interface AccordionProps {
  className?: string
  animated?: boolean
  defaultOpen?: boolean
  isOpen?: boolean
  index?: number
}

export const AccordionContext = React.createContext({})

export const Accordion: React.FC<AccordionProps> = (props): React.ReactElement => {
  const { isDependent, toggleActiveID, activeID, alwaysOpen, animatedCollapse } = React.useContext<
    any
  >(CollapsibleContext)

  const { className, children, isOpen = false, animated = animatedCollapse, index = 0 } = props

  const [isAccordionOpen, toggleAccordion] = React.useState(isOpen)

  const accordionStore = {
    isOpen: isAccordionOpen,
    toggle: () => {
      if (isDependent) {
        toggleActiveID(activeID === index ? (alwaysOpen ? 0 : -1) : index)
      } else {
        toggleAccordion(!isAccordionOpen)
      }
    },
    index,
    animated
  }

  React.useEffect(() => {
    toggleAccordion(activeID === index)
  }, [activeID])
  console.log("className", className)
  return (
    <div {...props} className={`accordion ${className ? className : ""}`}>
      <AccordionContext.Provider value={accordionStore}>{children}</AccordionContext.Provider>
    </div>
  )
}
