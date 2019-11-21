import * as React from 'react'

export const Trigger = ({
  isOpen,
  handleActive,
  className = 'collapse-trigger',
  children,
  index,
  disabled = false,
  controlled = false
}) => {
  const thisProps = {}

  if (disabled) thisProps['aria-disabled'] = true

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
