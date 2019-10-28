import * as React from 'react'

import { CollapserContext } from '../collapser'

export const Trigger = (props) => {
  const { className, collapseID, open, setActive } = props

  const { animated } = React.useContext(CollapserContext)

  return (
    <div
      {...props}
      className={`accordion-trigger trigger-id-${collapseID} ${open ? 'isOpen' : ''}${
        className ? ' ' + className : ''
      }`}
      onClick={() => {
        setActive(collapseID)
      }}
      style={{ cursor: 'pointer', transition: animated ? '0.3s' : 0 }}
    >
      {collapseID} {open && open}
    </div>
  )
}
