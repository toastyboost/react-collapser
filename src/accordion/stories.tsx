import * as React from "react"
import { storiesOf } from "@storybook/react"

import { Accordion, Trigger, Content } from "./index"
import { StyledAccordion, StyledTitle, StyledContent } from "./styled"

storiesOf("Accordion", module).add("Toggle", () => {
  return (
    <>
      <Accordion>
        <Trigger>The Title</Trigger>
        <Content>The Content</Content>
      </Accordion>
    </>
  )
})

storiesOf("Accordion", module).add("With StyledComponents", () => {
  return (
    <StyledAccordion>
      <StyledTitle>Styeld title</StyledTitle>
      <StyledContent>
        React component to wrap content in Collapsible element with trigger to open and close.
      </StyledContent>
    </StyledAccordion>
  )
})

storiesOf("Accordion", module).add("Default condition", () => {
  return (
    <>
      <Accordion isOpen>
        <Trigger>The Title</Trigger>
        <Content>The Content</Content>
      </Accordion>
    </>
  )
})

storiesOf("Accordion", module).add("With animation", () => {
  return (
    <>
      <Accordion animated>
        <Trigger>The Title</Trigger>
        <StyledContent>
          React component to wrap content in Collapsible element with trigger to open and close.
        </StyledContent>
      </Accordion>
    </>
  )
})
