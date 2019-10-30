import * as React from 'react'

import { Ctx } from '../collapser'

export const Panel = (props) => {
  const { className, children, index } = props

  const { activeIndex } = React.useContext(Ctx)

  return (
    <div
      {...props}
      className={`collapser-panel ${className}`}
      style={{
        display: activeIndex === index ? 'inherit' : 'none'
      }}
    >
      {children}
    </div>
  )
}
