import * as React from 'react'

export const Ctx = React.createContext()

export const Collapser = (props) => {
  const { className, children, index = 0 } = props

  const [activeIndex, setActiveIndex] = React.useState(index)

  const handleActive = (clickeIndex) => {
    setActiveIndex(clickeIndex === activeIndex ? '' : clickeIndex)
  }

  return (
    <div {...props} className={`collapser ${className}`}>
      <Ctx.Provider value={{ handleActive, activeIndex }}>
        {children.map((child, key) =>
          React.cloneElement(child, { index: key % 2 ? key - 1 : key })
        )}
      </Ctx.Provider>
    </div>
  )
}
