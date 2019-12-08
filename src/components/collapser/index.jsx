import * as React from 'react'

export const Collapser = (props) => {
  const {
    children,
    className = 'collapse',
    alwaysOpen = false,
    index = typeof alwaysOpen === 'number'
      ? alwaysOpen + 1
      : alwaysOpen
      ? 0
      : -1,
    controlled = false,
    revealed = false,
    animated = false,
    disabled = false,
    onChange = () => null
  } = props

  const divProps = { ...props }
  delete divProps.alwaysOpen

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
            ? alwaysOpen + 1
            : 0
          : clickedIndex
      )
    } else {
      setActiveIndex(isEqual ? -1 : clickedIndex)
    }
  }

  const handleState = (child, key) => {
    if (typeof child === 'string') return child
    let isOpen = false

    if (isRevealed) {
      isOpen = isRevealed
    } else if (controlled) {
      isOpen = controlled
    } else {
      isOpen = key % 2 !== 0 ? key === activeIndex + 1 : key === activeIndex
    }

    const state = {
      handleActive,
      key,
      index: key,
      animated,
      isOpen
    }

    return React.cloneElement(child, state)
  }

  return (
    <div {...divProps} className={className}>
      {children.map((child, key) => {
        if (child.type.toString() === 'Symbol(react.element)') {
          return handleState(child, key)
        }

        if (child.type.toString() === 'Symbol(react.fragment)') {
          return child.props.children.map((item, childKey) => {
            return handleState(item, child.key * 2 + childKey)
          })
        }

        return handleState(child, key)
      })}
    </div>
  )
}
