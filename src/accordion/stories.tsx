import * as React from "react"
import { storiesOf } from "@storybook/react"

import { Accordion, Trigger, Content, Collapsible } from "./index"
import { StyledAccordion, StyledTitle, StyledContent } from "./styled"

// accordion	If true, Collapse renders as Accordion

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

storiesOf("Accordion", module).add("Multiple and unlinked", () => {
  return (
    <>
      <Accordion animated isOpen>
        <Trigger>Introducing JSX</Trigger>
        <StyledContent>
          This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax
          extension to JavaScript. We recommend using it with React to describe what the UI should
          look like. JSX may remind you of a template language, but it comes with the full power of
          JavaScript.
        </StyledContent>
      </Accordion>
      <Accordion animated>
        <Trigger>Components and Props</Trigger>
        <StyledContent>
          Components let you split the UI into independent, reusable pieces, and think about each
          piece in isolation. This page provides an introduction to the idea of components.
        </StyledContent>
      </Accordion>
      <Accordion animated>
        <Trigger>Handling Events</Trigger>
        <StyledContent>
          Handling events with React elements is very similar to handling events on DOM elements.
          There are some syntactic differences:
        </StyledContent>
      </Accordion>
    </>
  )
})

storiesOf("Accordion", module).add("Multiple and linked", () => {
  return (
    <Collapsible initialKey={2}>
      <StyledAccordion>
        <StyledTitle>Introducing JSX</StyledTitle>
        <StyledContent>
          This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax
          extension to JavaScript. We recommend using it with React to describe what the UI should
          look like. JSX may remind you of a template language, but it comes with the full power of
          JavaScript.
        </StyledContent>
      </StyledAccordion>
      <StyledAccordion>
        <StyledTitle>Components and Props</StyledTitle>
        <StyledContent>
          Components let you split the UI into independent, reusable pieces, and think about each
          piece in isolation. This page provides an introduction to the idea of components.
        </StyledContent>
      </StyledAccordion>
      <StyledAccordion>
        <StyledTitle>Handling Events</StyledTitle>
        <StyledContent>
          Handling events with React elements is very similar to handling events on DOM elements.
          There are some syntactic differences:
        </StyledContent>
      </StyledAccordion>
    </Collapsible>
  )
})

storiesOf("Accordion", module).add("always open", () => {
  return (
    <Collapsible animated initialKey={2}>
      <StyledAccordion>
        <StyledTitle>Introducing JSX</StyledTitle>
        <StyledContent>
          This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax
          extension to JavaScript. We recommend using it with React to describe what the UI should
          look like. JSX may remind you of a template language, but it comes with the full power of
          JavaScript.
        </StyledContent>
      </StyledAccordion>
      <StyledAccordion>
        <StyledTitle>Components and Props</StyledTitle>
        <StyledContent>
          Components let you split the UI into independent, reusable pieces, and think about each
          piece in isolation. This page provides an introduction to the idea of components.
        </StyledContent>
      </StyledAccordion>
      <StyledAccordion>
        <StyledTitle>Handling Events</StyledTitle>
        <StyledContent>
          Handling events with React elements is very similar to handling events on DOM elements.
          There are some syntactic differences:
        </StyledContent>
      </StyledAccordion>
    </Collapsible>
  )
})

storiesOf("Accordion", module).add("Onchange callback", () => {
  const handleChange = () => {
    console.log("accardion handle change")
  }
  return (
    <Collapsible animated initialKey={2}>
      <StyledAccordion>
        <StyledTitle onChange={handleChange}>Introducing JSX</StyledTitle>
        <StyledContent>
          This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax
          extension to JavaScript. We recommend using it with React to describe what the UI should
          look like. JSX may remind you of a template language, but it comes with the full power of
          JavaScript.
        </StyledContent>
      </StyledAccordion>
      <StyledAccordion>
        <StyledTitle>Components and Props</StyledTitle>
        <StyledContent>
          Components let you split the UI into independent, reusable pieces, and think about each
          piece in isolation. This page provides an introduction to the idea of components.
        </StyledContent>
      </StyledAccordion>
      <StyledAccordion>
        <StyledTitle>Handling Events</StyledTitle>
        <StyledContent>
          Handling events with React elements is very similar to handling events on DOM elements.
          There are some syntactic differences:
        </StyledContent>
      </StyledAccordion>
    </Collapsible>
  )
})
