import * as React from 'react'

import { CollapserContext } from '../collapser'

export const Panel = (props) => {
  const { className, children, isOpen } = props

  const { animated } = React.useContext(CollapserContext)

  return (
    <div
      {...props}
      className={`accordion-content content-id- ${className ? ' ' + className : ''}${
        isOpen ? 'isOpen' : ''
      }`}
      style={{
        overflow: isOpen ? 'auto' : 'hidden',
        maxHeight: isOpen ? 'initial' : 0,
        transition: animated ? '0.3s' : 0
      }}
    >
      {children}
      {/* {React.Children.map(children, (child) => {
        return typeof child.type === 'function'
          ? React.cloneElement(child, {
              className: 'accordion-nested'
            })
          : child
      })} */}
    </div>
  )
}
