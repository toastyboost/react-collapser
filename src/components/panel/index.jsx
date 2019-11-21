import * as React from 'react'

export const Panel = ({
  className = 'collapse-panel',
  children,
  controlled,
  animated,
  isOpen
}) => {
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
