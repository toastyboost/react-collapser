import * as React from 'react'

export const Trigger = (props) => {
  const {
    handleActive,
    className = 'collapse-trigger',
    children,
    index,
    isOpen,
    disabled = false,
    controlled
  } = props

  const thisProps = {
    className,
    'aria-expanded': (controlled && controlled) || isOpen
  }

  if (disabled) {
    thisProps['aria-disabled'] = true
  }

  return (
    <div {...thisProps} onClick={() => !disabled && handleActive(index)}>
      {children}
    </div>
  )
}
