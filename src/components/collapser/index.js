import * as React from 'react'

export const Ctx = React.createContext()

export const Collapser = (props) => {
  const { children, index = 0 } = props

  const [activeID, setActiveID] = React.useState(index)
  const [isOpen, toggle] = React.useState(isOpen)

  const handleToggle = () => {
    toggle(!isOpen)
  }

  const handleActive = (i) => {
    setActiveID(i)
  }

  return (
    <div {...props} className={`collapser`}>
      <Ctx.Provider value={{ handleToggle, handleActive, isOpen }}>{children}</Ctx.Provider>
    </div>
  )
}
