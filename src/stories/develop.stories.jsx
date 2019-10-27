import * as React from 'react'
import { Button } from '@storybook/react/demo'

export default { title: 'Develop' }

export const withConsole = () => {
  const [isClicked, toggle] = React.useState(false)

  const handleClick = () => {
    toggle(!isClicked)
  }

  console.log(`Button state => ${isClicked}`)

  return <Button onClick={handleClick}>Hello Button {isClicked && 'clicked!'}</Button>
}
