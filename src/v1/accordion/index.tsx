import * as React from "react"

import { AccordionContainer } from "./styles"

type AccordionProps = {
  className?: string
  isOpen?: boolean
  isAnimated?: boolean
  index?: number
}
import { CollapsibleContext } from "../collapsible"

export const AccordionContext = React.createContext<AccordionProps | {}>({})

export const Accordion: React.FC<AccordionProps> = (props) => {
  const { className, children, isOpen = false, isAnimated = false, index } = props

  const { alwaysOpen, currentKey, toggleCurrent, animation } = React.useContext<any>(
    CollapsibleContext
  )

  const [insideOpen, openToogler] = React.useState<any>(isOpen)

  const handleToggle = (id: number | undefined) => {
    openToogler(currentKey === id)
    toggleCurrent && toggleCurrent(currentKey === id ? (alwaysOpen ? 0 : -1) : id)
  }

  React.useEffect(() => {
    openToogler(isOpen)
  }, [isOpen])

  return (
    <AccordionContainer {...props} className={`${className} accordion`}>
      <AccordionContext.Provider
        value={{
          handleToggle: () => handleToggle(index),
          isOpen: insideOpen,
          isAnimated,
          index,
          animation
        }}
      >
        {children}
      </AccordionContext.Provider>
    </AccordionContainer>
  )
}
