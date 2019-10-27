import * as React from "react"
import { storiesOf } from "@storybook/react"

import { Ui } from "../ui/st"

import { Accordion, Trigger, Content, Collapsible } from "../components"

import { data } from "../ui/mock"

storiesOf("Collapsible", module).add("Nested", () => {
  return (
    <Ui>
      <Collapsible>
        {data.map(({ title, content }, key) => (
          <Accordion key={key} index={key}>
            <Trigger>{title}</Trigger>
            <Content>
              {content}
              <Accordion>
                <Trigger>Learn Once, Write Anywhere</Trigger>
                <Content>
                  We don’t make assumptions about the rest of your technology stack, so you can
                  develop new features in React without <a>rewriting</a> existing code
                </Content>
              </Accordion>
            </Content>
          </Accordion>
        ))}
      </Collapsible>
    </Ui>
  )
})
