import * as React from "react"

import { createElement } from "../../lib"
import { AccordionContainer } from "./styles"

type AccordionProps = {
  className?: string
  isOpen?: boolean
  animated?: boolean
  toggleCallback?: () => number
  activeKey?: number
  index?: number
}

export const Accordion: React.FC<AccordionProps> = (props) => {
  const {
    children = {},
    isOpen = false,
    animated = false,
    toggleCallback,
    activeKey = 0,
    index
  } = props

  const [isContentOpened, toogle] = React.useState(isOpen)

  const triggerData = {
    name: "Trigger",
    props: {
      isOpen: isContentOpened,
      onClick: () => {
        toggleCallback && toggleCallback()
        toogle(!isContentOpened)
      }
    }
  }

  const contentData = {
    name: "Content",
    props: {
      isOpen: toggleCallback ? activeKey === index : isContentOpened,
      animated
    }
  }

  const titleChildren = createElement(children, triggerData)
  const contentChildren = createElement(children, contentData)

  return (
    <AccordionContainer {...props}>
      {titleChildren}
      {contentChildren}
    </AccordionContainer>
  )
}
