import * as React from 'react'

import { Ctx } from '../collapser'

export const Trigger = (props) => {
  const { children, index } = props
  const { handleToggle, handleActive } = React.useContext(Ctx)

  const handleClick = () => {
    handleToggle()
    handleActive(index)
  }

  return (
    <div {...props} className={`trigger`} onClick={handleClick}>
      {children}
    </div>
  )
}
