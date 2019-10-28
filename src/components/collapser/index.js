import * as React from 'react'
import { getId } from '@/libs'
// import { CollapsibleContext } from '../collapser'

export const CollapserContext = React.createContext()

export const Collapser = (props) => {
  const { className = '', children, animated = false, collapseID = null } = props

  const [currentID] = React.useState(!collapseID && getId())
  const [activeID, setActiveID] = React.useState(null)

  console.log(currentID, activeID)
  return (
    <div {...props} className={`accordion${className ? ' ' + className : ''}`}>
      <CollapserContext.Provider value={[]}>
        {React.Children.map(children, (child, index) =>
          typeof child.type === 'function'
            ? React.cloneElement(child, {
                index,
                collapseID: currentID,
                isOpen: activeID === currentID,
                setActive: setActiveID
              })
            : child
        )}
      </CollapserContext.Provider>
    </div>
  )
}
