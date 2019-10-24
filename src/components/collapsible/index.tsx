import * as React from "react"

export interface CollapsibleProps {
  className?: string
  isDependent?: boolean
  initial?: number
  alwaysOpen?: boolean
  animated?: boolean
}

export const CollapsibleContext = React.createContext({})

export const Collapsible: React.FC<CollapsibleProps> = (props) => {
  const { className, children, initial = 0, alwaysOpen = false, animated = false } = props

  const [activeID, setActiveID] = React.useState(initial)

  const store = {
    isDependent: true,
    activeID,
    toggleActiveID: setActiveID,
    alwaysOpen,
    animatedCollapse: animated
  }

  return (
    <div {...props} className={`collapsible ${className ? className : ""}`}>
      <CollapsibleContext.Provider value={store}>{children}</CollapsibleContext.Provider>
    </div>
  )
}
