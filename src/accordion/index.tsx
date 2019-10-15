import * as React from "react"

import { AccordionContainer, TriggerStyled, ContentStyled } from "./styles"

interface CreateElementProps {
  name: string
  props?: {
    isOpen: boolean
    onClick?: (e: React.SyntheticEvent) => void
    style?: number
  }
}

interface AccordionProps {
  className?: string
  isOpen?: boolean
  animated?: boolean
  toggleCallback?: () => number
  activeKey?: number
  index?: number
}

const createElement = (childrens: React.ReactNode, data: CreateElementProps) => {
  return React.Children.map(childrens, (child: any) => {
    const styledName = child.type.target && child.type.target.name
    const plainName = child.type && child.type.name
    return (
      (data.name === styledName || data.name === plainName) &&
      React.cloneElement(child, { ...data.props, ...child.props })
    )
  })
}

const Accordion: React.FC<AccordionProps> = (props) => {
  const { children, isOpen = false, animated = false, toggleCallback, activeKey = 0, index } = props

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

type TriggerProps = {
  onChange: () => any
}

const Trigger: React.FC<TriggerProps> = (props) => {
  const { onChange } = props
  return <TriggerStyled {...props} onChange={onChange} />
}

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

type CollapsibleProps = {
  initialKey?: number
  children: React.ReactNode
  alwaysOpen?: boolean
  animated?: boolean
}

const Collapsible: React.FC<CollapsibleProps> = (props) => {
  const { initialKey = 0, alwaysOpen = false, children, animated = false } = props
  const [activeKey, setKey] = React.useState(initialKey)

  const handleToggle = (key: any) => {
    alwaysOpen && setKey(key === activeKey ? 0 : key)
    !alwaysOpen && setKey(key === activeKey ? -1 : key)
  }

  const ele = React.Children.map(children, (child: any, index: number) => {
    return React.cloneElement(child, {
      index,
      activeKey,
      animated,
      toggleCallback: () => {
        handleToggle(index)
      }
    })
  })

  React.useEffect(() => {}, [activeKey])

  return <>{ele}</>
}

export { Accordion, Trigger, Content, Collapsible }
