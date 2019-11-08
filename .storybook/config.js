import { configure, addDecorator, addParameters } from '@storybook/react'

import { configureActions } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withConsole } from '@storybook/addon-console'
import { withInfo } from '@storybook/addon-info'
import { themes } from '@storybook/theming'

// Global

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    theme: themes.dark
  }
})

// Plugins

configureActions({
  depth: 20,
  limit: 5
})

addDecorator(
  withInfo({
    header: true,
    source: false
  })
)

addDecorator(withKnobs)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

configure(require.context('../src/stories', true, /\.stories\.jsx$/), module)
