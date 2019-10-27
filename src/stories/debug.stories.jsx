import * as React from 'react'
import { Button } from '@storybook/react/demo'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default { title: 'Debug' }

export const withTextKnob = () => {
  const userName = text('Name', 'Maria')
  return <Button>Hello, {userName}!</Button>
}

export const withBoleanKnob = () => {
  const [isClicked, toggle] = React.useState(false)

  const handleClick = () => toggle(!isClicked)

  return (
    <Button onClick={handleClick}>
      Hello Button {boolean('Clicked', isClicked) && 'clicked!'}
    </Button>
  )
}

export const withAction = () => {
  return <Button onClick={(e) => action('What returns Button')(e)}>Hello Button</Button>
}
