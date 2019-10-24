import * as React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs/react"

import { Ui } from "../ui/st"

import { Accordion, Trigger, Content } from "../components"

storiesOf("Defaults", module).add("Open by default", () => {
  return (
    <Ui>
      <Accordion isOpen={true}>
        <Trigger>Learn Once, Write Anywhere</Trigger>
        <Content>
          We don’t make assumptions about the rest of your technology stack, so you can develop new
          features in React without <a>rewriting</a> existing code
        </Content>
      </Accordion>
    </Ui>
  )
})
