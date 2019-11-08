import * as React from 'react'

import { Ctx } from '../collapser'

export const Panel = (props) => {
  const { isOpen } = React.useContext(Ctx)

  const { className = 'collapse-panel', children, controlled, animated } = props

  return (
    <div
      className={className}
      aria-expanded={(controlled && controlled) || isOpen}
      style={{
        transition: animated ? 'all 0.3s' : 0,
        maxHeight: (controlled && controlled) || isOpen ? 'initial' : 0
      }}
    >
      {children}
    </div>
  )
}
