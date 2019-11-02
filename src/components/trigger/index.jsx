import * as React from 'react'

import { Ctx } from '../collapser'

export const Trigger = ({
  className = 'collapser-trigger',
  children,
  index
}) => {
  const { handleActive, activeIndex, openAll } = React.useContext(Ctx)

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
      onClick={() => handleActive(index)}
      className={classNames}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </div>
  )
}
