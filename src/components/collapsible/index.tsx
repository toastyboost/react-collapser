import * as React from "react"

import { getId } from "../../ui/libs"

export interface CollapsibleProps {
  className?: string
  collapsible?: boolean
  initial?: number
  alwaysOpen?: boolean
  animated?: boolean
}

export const CollapsibleContext = React.createContext({})

export const Collapsible: React.FC<CollapsibleProps> = (props: any) => {
  const { className, children, initial = 0, alwaysOpen = false, animated = false } = props

  const [activeID, setActiveID] = React.useState(initial)

  const store = {
    collapsible: true,
    activeID,
    toggleActiveID: setActiveID,
    alwaysOpen,
    animatedCollapse: animated
  }

  return (
    <div {...props} className={`collapsible ${className ? className : ""}`}>
      <CollapsibleContext.Provider value={store}>
        {React.Children.map(children, (child) => {
          return typeof child.type === "function"
            ? React.cloneElement(child, { className: "accordion-nested", index: getId() })
            : child
        })}
      </CollapsibleContext.Provider>
    </div>
  )
}
