import * as React from 'react'

export const Collapser = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const isNumber = typeof props.alwaysOpen === 'number'

  const {
    children,
    className = 'collapse',
    alwaysOpen = false,
    index = isNumber ? alwaysOpen : alwaysOpen ? 0 : -1,
    controlled,
    revealed,
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
      setActiveIndex(isEqual ? (isNumber ? alwaysOpen : 0) : clickedIndex)
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
    const panel = childName === 'Panel' || childName === 'Styled(Panel)'

    const childKey = trigger ? key : key - 1

    const state = {
      key,
      index: childKey,
      isOpen:
        (isRevealed && isRevealed) || controlled || childKey === activeIndex
    }

    if (trigger) {
      state.handleActive = handleActive
    }

    if (panel) {
      state.animated = animated
    }

    return React.cloneElement(child, state)
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
