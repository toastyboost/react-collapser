import * as React from 'react'

import { Ctx } from '../collapser'

export const Panel = (props) => {
  const { children } = props

  const { isOpen } = React.useContext(Ctx)

  return (
    <div
      {...props}
      className={`panel`}
      style={{
        display: isOpen ? 'inherit' : 'none'
      }}
    >
      {children}
    </div>
  )
}
