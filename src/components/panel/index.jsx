import * as React from 'react'

import { Ctx } from '../collapser'

export const Panel = (props) => {
  const { className, children, index } = props

  const { activeIndex, animated } = React.useContext(Ctx)

  const isOpen = index === activeIndex
  const css = 'collapser-panel'

  return (
    <div
      {...props}
      className={`${css} ${isOpen ? `${css}--open` : `${css}--closed`} ${
        !className ? '' : className
      }`}
      style={{
        transition: animated ? 'all .2s ease-in-out' : 0,
        overflow: isOpen ? 'auto' : 'hidden',
        maxHeight: isOpen ? 'initial' : 0
      }}
    >
      {children}
    </div>
  )
}
