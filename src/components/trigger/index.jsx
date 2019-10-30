import * as React from 'react'

import { Ctx } from '../collapser'

export const Trigger = (props) => {
  const { className, children, index } = props
  const { handleActive } = React.useContext(Ctx)

  const handleClick = () => handleActive(index)

  return (
    <div
      {...props}
      onClick={handleClick}
      className={`collapser-trigger ${className}`}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </div>
  )
}
