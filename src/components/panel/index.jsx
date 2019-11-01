import * as React from 'react'

import { Ctx } from '../collapser'

export const Panel = ({ className = 'collapser-panel', children, index }) => {
  const { activeIndex, animated } = React.useContext(Ctx)

  const isOpen = index === activeIndex

  const classNames = [className, isOpen ? 'open' : 'closed'].join(' ')

  return (
    <div
      className={classNames}
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
