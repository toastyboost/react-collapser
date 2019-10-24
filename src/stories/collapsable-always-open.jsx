import * as React from "react"
import { storiesOf } from "@storybook/react"

import { Ui } from "../ui/st"

import { Accordion, Trigger, Content, Collapsible } from "../components"

import { data } from "../ui/mock"

storiesOf("Collapsible", module).add("Always open", () => {
  return (
    <Ui>
      <Collapsible alwaysOpen>
        {data.map(({ title, content }, key) => (
          <Accordion key={key} index={key}>
            <Trigger>{title}</Trigger>
            <Content dangerouslySetInnerHTML={{ __html: content }} />
          </Accordion>
        ))}
      </Collapsible>
    </Ui>
  )
})
