import * as React from "react"

import { CollapsibleContext } from "../collapsible"

export interface AccordionProps {
  className?: string
  animated?: boolean
  defaultOpen?: boolean
  isOpen?: boolean
  index?: any
}

export const AccordionContext = React.createContext({})

export const Accordion: React.FC<AccordionProps> = (props): React.ReactElement => {
  const { collapsible, toggleActiveID, activeID, alwaysOpen, animatedCollapse } = React.useContext<
    any
  >(CollapsibleContext)

  const {
    className,
    children,
    isOpen = false,
    animated = animatedCollapse ? animatedCollapse : false,
    index
  } = props

  const [isAccordionOpen, toggleAccordion] = React.useState(isOpen)

  const accordionStore = {
    isOpen: isAccordionOpen,
    toggle: () => {
      // if (collapsible) {
      //   toggleActiveID(activeID === index ? (alwaysOpen ? 0 : -1) : index)
      // } else {
      toggleAccordion(!isAccordionOpen)
      // }
    },

    animated
  }
  console.log("props.index ", index)
  // React.useEffect(() => {
  //   collapsible && toggleAccordion(activeID === index)
  // }, [activeID])

  return (
    <div {...props} className={`accordion${className ? " " + className : ""}`}>
      <AccordionContext.Provider value={accordionStore}>{children}</AccordionContext.Provider>
    </div>
  )
}
