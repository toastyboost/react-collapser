import * as React from "react"

import { CollapsibleContainer } from "./styles"

type CollapsibleProps = {
  initialKey?: number
  children: React.ReactNode
  alwaysOpen?: boolean
  animated?: boolean
}

export const Collapsible: React.FC<CollapsibleProps> = (props) => {
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

  return <CollapsibleContainer>{ele}</CollapsibleContainer>
}
