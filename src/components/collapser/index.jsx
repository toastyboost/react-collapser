import * as React from 'react'

export const Ctx = React.createContext()

export const Collapser = (props) => {
  const {
    children,
    className = 'collapse',
    alwaysOpen = false,
    index = typeof alwaysOpen === 'number' ? alwaysOpen : alwaysOpen ? 0 : -1,
    controlled = false,
    revealed = false,
    animated = false,
    disabled = false
  } = props

  const [activeIndex, setActiveIndex] = React.useState(index)
  const [isRevealed, revealAll] = React.useState(false)

  const handleActive = (clickedIndex) => {
    if (controlled || disabled) return false
    revealed && revealAll(false)
    const isEqual = clickedIndex === activeIndex

    if (alwaysOpen) {
      setActiveIndex(
        isEqual
          ? typeof alwaysOpen === 'number'
            ? alwaysOpen
            : 0
          : clickedIndex
      )
    } else {
      setActiveIndex(isEqual ? -1 : clickedIndex)
    }
  }

  React.useEffect(() => {
    revealed && revealAll(true)
  }, [revealed])

  const handleState = (child, key) => {
    const childName = child.type.displayName
    const trigger = childName === 'Trigger' || childName === 'Styled(Trigger)'

    const childKey = trigger ? key : key - 1

    return (
      <Ctx.Provider
        value={{
          handleActive,
          isOpen:
            (isRevealed && isRevealed) || controlled || childKey === activeIndex
        }}
      >
        {React.cloneElement(child, {
          key: childKey,
          index: childKey,
          animated
        })}
      </Ctx.Provider>
    )
  }

  return (
    <div className={className}>
      {children.map((child, key) => {
        if (child.type.toString() === 'Symbol(react.fragment)') {
          return child.props.children.map((item, childKey) =>
            handleState(item, childKey + key)
          )
        }
        return handleState(child, key)
      })}
    </div>
  )
}
