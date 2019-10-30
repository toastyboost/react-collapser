import * as React from 'react'

import { Ctx } from '../collapser'

export const Trigger = (props) => {
  const { className, children, index } = props
  const { handleActive, activeIndex } = React.useContext(Ctx)

  const isOpen = index === activeIndex
  const css = 'collapser-trigger'

  return (
    <div
      {...props}
      onClick={() => handleActive(index)}
      className={`${css} ${isOpen ? `${css}--open` : `${css}--closed`} ${
        !className ? '' : className
      }`}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </div>
  )
}
