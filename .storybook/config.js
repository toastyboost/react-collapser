import { configure, addDecorator, addParameters } from "@storybook/react"

import { withInfo } from "@storybook/addon-info"
import { withKnobs } from "@storybook/addon-knobs/react"

addDecorator(withInfo({ header: true, inline: true }))
addDecorator(withKnobs)

addParameters({
  options: {
    showPanel: true,
    panelPosition: "right"
  }
})

const req = require.context("../src/stories", true, /.jsx/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
