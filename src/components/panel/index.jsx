import * as React from 'react'

export const Panel = ({
  className = 'collapse-panel',
  children,
  controlled,
  animated,
  isOpen
}) => {
  const styles = {
    maxHeight: (controlled && controlled) || isOpen ? 'initial' : 0,
    overflow: isOpen ? 'visible' : 'hidden'
  }

  if (animated) {
    styles.transition = 'all 0.3s'
  }

  return (
    <div
      className={className}
      aria-expanded={(controlled && controlled) || isOpen}
      style={styles}
    >
      {children}
    </div>
  )
}
