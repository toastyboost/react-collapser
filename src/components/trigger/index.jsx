import * as React from 'react'

import { Ctx } from '../collapser'

export const Trigger = (props) => {
  const {
    handleActive,
    activeIndex,
    openAll,
    isOpenContext
  } = React.useContext(Ctx)

  const {
    className = 'collapser-trigger',
    children,
    index,
    isOpen = isOpenContext
  } = props

  const [isOpenState, toggle] = React.useState(isOpen)

  React.useEffect(() => {
    openAll && toggle(openAll)
  }, [openAll])

  React.useEffect(() => {
    toggle(isOpen || index === activeIndex)
  }, [activeIndex, isOpen])

  const classNames = [className, isOpenState ? 'open' : 'closed'].join(' ')

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
