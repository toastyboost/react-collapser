import * as React from 'react'

export const Ctx = React.createContext()

export const Collapser = ({
  className = 'collapser',
  children,
  alwaysOpen = false,
  index = alwaysOpen ? 0 : -1,
  animated = false
}) => {
  const [activeIndex, setActiveIndex] = React.useState(index)

  const classNames = [className].join(' ')

  const handleActive = (clickedIndex) => {
    const isNumber = typeof alwaysOpen === 'number'
    const isEqual = clickedIndex === activeIndex

    if (alwaysOpen) {
      setActiveIndex(isEqual ? (isNumber ? alwaysOpen : 0) : clickedIndex)
    } else {
      setActiveIndex(isEqual ? -1 : clickedIndex)
    }
  }

  const cloneChildren = (clone, key, childKey, isFragment = false) => {
    return React.cloneElement(clone, {
      key: childKey ? key + childKey : key,
      index: key % (isFragment ? 1 : 2) ? key - 1 : key
    })
  }

  return (
    <div className={classNames}>
      <Ctx.Provider value={{ handleActive, activeIndex, animated }}>
        {children.map((child, key) =>
          child.type.toString() === 'Symbol(react.fragment)'
            ? child.props.children.map((item, childKey) =>
                cloneChildren(item, key, childKey, true)
              )
            : cloneChildren(child, key)
        )}
      </Ctx.Provider>
    </div>
  )
}
