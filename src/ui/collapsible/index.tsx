import * as React from "react"

import { CollapsibleContainer } from "./styles"

type CollapsibleProps = {
  initialKey?: number
  isAnimated?: boolean
  alwaysOpen?: boolean
  className?: string
  animation?: string
  children?: React.ReactNode
}

export const CollapsibleContext = React.createContext<CollapsibleProps | {}>({})

export const Collapsible: React.FC<CollapsibleProps> = (props) => {
  const { className, children, initialKey = null, alwaysOpen = false, isAnimated } = props

  const [currentKey, toggleCurrent] = React.useState<any>(initialKey)

  const isOpen = (id: number) => {
    return currentKey === id
  }

  return (
    <CollapsibleContainer className={`${className} collapsible`}>
      <CollapsibleContext.Provider value={{ ...props, currentKey, toggleCurrent, alwaysOpen }}>
        {React.Children.map(children, (child: any, index) => {
          return React.cloneElement(child, {
            index,
            isOpen: isOpen(index),
            isAnimated
          })
        })}
      </CollapsibleContext.Provider>
    </CollapsibleContainer>
  )
}
