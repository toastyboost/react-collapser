import * as React from 'react'

import { Ctx } from '../collapser'

export const Trigger = ({
  className = 'collapser-trigger',
  children,
  index
}) => {
  const { handleActive, activeIndex } = React.useContext(Ctx)

  const isOpen = index === activeIndex
  const classNames = [className, isOpen ? 'open' : 'closed'].join(' ')

  return (
    <div
      onClick={() => handleActive(index)}
      className={classNames}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </div>
  )
}
