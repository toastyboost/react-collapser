import * as React from 'react'

export const Panel = (props) => {
  const {
    children,
    isOpen,
    controlled,
    animated,
    className = 'collapse-panel'
  } = props

  const thisProps = {
    className,
    'aria-expanded': (controlled && controlled) || isOpen
  }

  return (
    <div
      {...thisProps}
      style={{
        transition: animated ? 'all 0.3s' : 0,
        maxHeight: (controlled && controlled) || isOpen ? 'initial' : 0
      }}
    >
      {children}
    </div>
  )
}
