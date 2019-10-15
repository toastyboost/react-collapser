import * as React from "react"

import { AccordionContainer, TriggerStyled, ContentStyled } from "./styles"

interface CreateElementProps {
  name: string
  props: {
    isOpen: boolean
    onClick?: (e: React.SyntheticEvent) => void
    style?: number
  }
}

interface AccordionProps {
  className?: string
  isOpen?: boolean
  animated?: boolean
}

const createElement = (childrens: React.ReactNode, data: CreateElementProps) => {
  return React.Children.map(childrens, (child: any) => {
    const styledName = child.type.target && child.type.target.name
    const plainName = child.type && child.type.name

    return (
      (data.name === styledName || data.name === plainName) && React.cloneElement(child, data.props)
    )
  })
}

const Accordion: React.FC<AccordionProps> = (props) => {
  const { children, isOpen = false, animated = false } = props

  const [isContentOpened, toogle] = React.useState(isOpen)

  const handleClick = () => {
    toogle(!isContentOpened)
  }

  const triggerData = {
    name: "Trigger",
    props: {
      isOpen: isContentOpened,
      onClick: handleClick
    }
  }

  const contentData = {
    name: "Content",
    props: {
      isOpen: isContentOpened,
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

const Trigger: React.FC = (props) => <TriggerStyled {...props} />

const Content: React.FC = (props: any) => {
  const ref = React.useRef("")

  const { isOpen } = props
  const [defaultHeight, setDefaultHeight] = React.useState<number | null>(null)

  React.useEffect(() => {
    const { clientHeight }: any = ref.current
    ref.current && setDefaultHeight(clientHeight)
  }, [])

  return (
    <ContentStyled
      {...props}
      ref={ref}
      style={defaultHeight && { maxHeight: isOpen ? defaultHeight : 0 }}
    />
  )
}

export { Accordion, Trigger, Content }
