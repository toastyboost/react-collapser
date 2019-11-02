import * as React from 'react'

import { Ctx } from '../collapser'

export const Panel = (props) => {
  const { className = 'collapser-panel', children, index } = props

  const { activeIndex, animated, openAll } = React.useContext(Ctx)

  const [isOpen, toggle] = React.useState(false)

  React.useEffect(() => {
    openAll && toggle(openAll)
  }, [openAll])

  React.useEffect(() => {
    toggle(index === activeIndex)
  }, [activeIndex])

  const classNames = [className, isOpen ? 'open' : 'closed'].join(' ')

  return (
    <div
      className={classNames}
      style={{
        transition: animated
          ? 'all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)'
          : 0,
        overflow: isOpen ? 'auto' : 'hidden',
        maxHeight: isOpen ? 'initial' : 0
      }}
    >
      {children}
    </div>
  )
}
