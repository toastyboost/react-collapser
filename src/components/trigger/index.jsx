import * as React from 'react'
import { Ctx } from '../collapser'

export const Trigger = (props) => {
  const { isOpen, handleActive } = React.useContext(Ctx)

  const {
    className = 'collapse-trigger',
    children,
    index,
    disabled = false,
    controlled = false
  } = props

  const thisProps = {}

  if (disabled) {
    thisProps['aria-disabled'] = true
  }

  return (
    <div
      {...thisProps}
      className={className}
      aria-expanded={(controlled && controlled) || isOpen}
      onClick={() => !disabled && handleActive(index)}
    >
      {children}
    </div>
  )
}
