import * as React from 'react'
import { Button } from '@storybook/react/demo'

export default { title: 'Starter' }

export const WithHandler = () => {
  const [isClicked, toggle] = React.useState(false)

  const handleClick = () => {
    toggle(!isClicked)
  }

  return (
    <Button onClick={handleClick}>
      Hello Button {isClicked && 'clicked!'}
      {test()}
    </Button>
  )
}
