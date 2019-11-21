import * as React from 'react'

export const Collapser = ({
  children,
  className = 'collapse',
  alwaysOpen = false,
  index = typeof alwaysOpen === 'number' ? alwaysOpen : alwaysOpen ? 0 : -1,
  controlled = false,
  revealed = false,
  animated = false,
  disabled = false,
  onChange = () => null
}) => {
  const [activeIndex, setActiveIndex] = React.useState(index)
  const [isRevealed, revealAll] = React.useState(false)

  React.useEffect(() => {
    revealed && revealAll(true)
  }, [revealed])

  React.useEffect(() => {
    onChange({
      activeIndex
    })
  }, [activeIndex])

  const handleActive = (clickedIndex) => {
    if ((controlled && controlled) || disabled) return false

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

  const handleState = (child, key) => {
    if (typeof child === 'string') return child

    const childName = child.type.name
    const trigger = childName === 'Trigger' || childName === 'Styled(Trigger)'

    const state = {
      handleActive,
      key,
      index: key,
      animated,
      isOpen:
        (isRevealed && isRevealed) ||
        (controlled && controlled) ||
        (trigger ? key : key - 1) === activeIndex
    }

    return React.cloneElement(child, state)
  }

  return (
    <div className={className}>
      {children.map((child, key) => {
        if (child.type.toString() === 'Symbol(react.element)') {
          return handleState(child, key)
        }

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
