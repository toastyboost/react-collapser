import * as React from 'react'

export const Ctx = React.createContext()

export const Collapser = (props) => {
  const {
    className,
    children,
    alwaysOpen = false,
    index = alwaysOpen ? 0 : -1,
    animated = false
  } = props

  const [activeIndex, setActiveIndex] = React.useState(index)

  const handleActive = (clickedIndex) => {
    const isNumber = typeof alwaysOpen === 'number'
    const isEqual = clickedIndex === activeIndex

    if (alwaysOpen) {
      setActiveIndex(isEqual ? (isNumber ? alwaysOpen : 0) : clickedIndex)
    } else {
      setActiveIndex(isEqual ? -1 : clickedIndex)
    }
  }

  const cloneChildren = (clone, key, isFragment = false) => {
    return React.cloneElement(clone, {
      index: key % (isFragment ? 1 : 2) ? key - 1 : key
    })
  }

  return (
    <div {...props} className={`collapser ${className}`}>
      <Ctx.Provider value={{ handleActive, activeIndex, animated }}>
        {children.map((child, key) =>
          child.type.toString() === 'Symbol(react.fragment)'
            ? child.props.children.map((item) => cloneChildren(item, key, true))
            : cloneChildren(child, key)
        )}
      </Ctx.Provider>
    </div>
  )
}
