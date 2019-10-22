import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Icon, Switch } from "antd"

import { Accordion, Trigger, Content, Collapsible } from "./ui"
import {
  StyledAccordion,
  StyledTitle,
  StyledContent,
  StyledControls,
  StyledAccordionContainer
} from "./styled"

import "antd/dist/antd.css"

storiesOf("Accordion", module).add("Uncontrolled component", () => {
  return (
    <>
      <StyledControls>
        <Switch disabled /> default <b>isOpen: false</b>
      </StyledControls>
      <Accordion>
        <Trigger>Learn Once, Write Anywhere</Trigger>
        <Content>
          We don’t make assumptions about the rest of your technology stack, so you can develop new
          features in React without <a>rewriting</a> existing code.
        </Content>
      </Accordion>
    </>
  )
})

storiesOf("Accordion", module).add("With Styled Components", () => {
  return (
    <>
      <StyledControls>
        <Switch disabled /> default <b>isOpen: false</b>
      </StyledControls>
      <StyledAccordion>
        <StyledTitle>Learn Once, Write Anywhere</StyledTitle>
        <StyledContent>
          We don’t make assumptions about the rest of your technology stack, so you can develop new
          features in React without <a>rewriting</a> existing code
        </StyledContent>
      </StyledAccordion>
    </>
  )
})

storiesOf("Accordion", module).add("Controlled component", () => {
  const [isOpened, toggle] = React.useState<boolean>(false)

  return (
    <>
      <StyledControls>
        <Switch onClick={() => toggle(!isOpened)} /> isOpen:&nbsp;
        <b>{isOpened ? "true" : "false"}</b>
      </StyledControls>
      <StyledAccordion isOpen={isOpened}>
        <StyledTitle>Learn Once, Write Anywhere</StyledTitle>
        <StyledContent>
          We don’t make assumptions about the rest of your technology stack, so you can develop new
          features in React without <a>rewriting</a> existing code
        </StyledContent>
      </StyledAccordion>
    </>
  )
})

storiesOf("Accordion", module).add("With animation", () => {
  return (
    <StyledAccordion isAnimated>
      <StyledTitle>Learn Once, Write Anywhere</StyledTitle>
      <StyledContent>
        We don’t make assumptions about the rest of your technology stack, so you can develop new
        features in React without <a>rewriting</a> existing code
      </StyledContent>
    </StyledAccordion>
  )
})

storiesOf("Accordion", module).add("With default state", () => {
  return (
    <>
      <StyledControls>
        <Switch disabled checked /> default <b>isOpen: true</b>
      </StyledControls>
      <StyledAccordion isAnimated isOpen>
        <StyledTitle>Learn Once, Write Anywhere</StyledTitle>
        <StyledContent>
          We don’t make assumptions about the rest of your technology stack, so you can develop new
          features in React without <a>rewriting</a> existing code
        </StyledContent>
      </StyledAccordion>
    </>
  )
})

storiesOf("Accordion", module).add("Independed accordions", () => {
  return (
    <StyledAccordionContainer>
      <StyledAccordion isOpen isAnimated>
        <StyledTitle>Introducing JSX</StyledTitle>
        <StyledContent>
          This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax
          extension to JavaScript. We recommend using it with React to describe what the UI should
          look like. JSX may remind you of a template language, but it comes with the full power of
          JavaScript.
        </StyledContent>
      </StyledAccordion>
      <StyledAccordion isAnimated>
        <StyledTitle>Components and Props</StyledTitle>
        <StyledContent>
          Components let you split the UI into independent, reusable pieces, and think about each
          piece in isolation. This page provides an introduction to the idea of components.
        </StyledContent>
      </StyledAccordion>
      <StyledAccordion isAnimated>
        <StyledTitle>Handling Events</StyledTitle>
        <StyledContent>
          Handling events with React elements is very similar to handling events on DOM elements.
          There are some syntactic differences:
        </StyledContent>
      </StyledAccordion>
    </StyledAccordionContainer>
  )
})

storiesOf("Collapsible", module).add("Defailt openned", () => {
  return (
    <StyledAccordionContainer>
      <Collapsible isAnimated initialKey={1}>
        <StyledAccordion>
          <StyledTitle>Introducing JSX</StyledTitle>
          <StyledContent>
            This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax
            extension to JavaScript. We recommend using it with React to describe what the UI should
            look like. JSX may remind you of a template language, but it comes with the full power
            of JavaScript.
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
    </StyledAccordionContainer>
  )
})

storiesOf("Collapsible", module).add("Dependeted accordions", () => {
  return (
    <StyledAccordionContainer>
      <Collapsible isAnimated initialKey={0}>
        <StyledAccordion>
          <StyledTitle>Introducing JSX</StyledTitle>
          <StyledContent>
            This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax
            extension to JavaScript. We recommend using it with React to describe what the UI should
            look like. JSX may remind you of a template language, but it comes with the full power
            of JavaScript.
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
    </StyledAccordionContainer>
  )
})

storiesOf("Collapsible", module).add("Always open", () => {
  return (
    <StyledAccordionContainer>
      <Collapsible isAnimated initialKey={1} alwaysOpen>
        <StyledAccordion>
          <StyledTitle>Introducing JSX</StyledTitle>
          <StyledContent>
            This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax
            extension to JavaScript. We recommend using it with React to describe what the UI should
            look like. JSX may remind you of a template language, but it comes with the full power
            of JavaScript.
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
    </StyledAccordionContainer>
  )
})

// storiesOf("Collapsible", module).add("Custom animation", () => {
//   return (
//     <StyledAccordionContainer>
//       <Collapsible
//         isAnimated
//         isAlwaysOpen
//         initialKey={1}
//         animation="max-height 0.4s cubic-bezier(.075, .82, .165, 1)"
//       >
//         <StyledAccordion>
//           <StyledTitle>Introducing JSX</StyledTitle>
//           <StyledContent>
//             This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax
//             extension to JavaScript. We recommend using it with React to describe what the UI should
//             look like. JSX may remind you of a template language, but it comes with the full power
//             of JavaScript.
//           </StyledContent>
//         </StyledAccordion>
//         <StyledAccordion>
//           <StyledTitle>Components and Props</StyledTitle>
//           <StyledContent>
//             Components let you split the UI into independent, reusable pieces, and think about each
//             piece in isolation. This page provides an introduction to the idea of components.
//           </StyledContent>
//         </StyledAccordion>
//         <StyledAccordion>
//           <StyledTitle>Handling Events</StyledTitle>
//           <StyledContent>
//             Handling events with React elements is very similar to handling events on DOM elements.
//             There are some syntactic differences:
//           </StyledContent>
//         </StyledAccordion>
//       </Collapsible>
//     </StyledAccordionContainer>
//   )
// })

// storiesOf("Collapsible", module).add("Show all", () => {
//   const [isOpened, toggle] = React.useState<boolean>(true)

//   return (
//     <>
//       <StyledControls>
//         <Switch onClick={() => toggle(!isOpened)} checked={isOpened} /> showAll:&nbsp;
//         <b>{isOpened ? "true" : "false"}</b>
//       </StyledControls>
//       <StyledAccordionContainer>
//         <Collapsible
//           isAnimated
//           isAlwaysOpen
//           openAll={isOpened}
//           animation="max-height 0.4s cubic-bezier(.075, .82, .165, 1)"
//         >
//           <StyledAccordion>
//             <StyledTitle>Introducing JSX</StyledTitle>
//             <StyledContent>
//               This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a
//               syntax extension to JavaScript. We recommend using it with React to describe what the
//               UI should look like. JSX may remind you of a template language, but it comes with the
//               full power of JavaScript.
//             </StyledContent>
//           </StyledAccordion>
//           <StyledAccordion>
//             <StyledTitle>Components and Props</StyledTitle>
//             <StyledContent>
//               Components let you split the UI into independent, reusable pieces, and think about
//               each piece in isolation. This page provides an introduction to the idea of components.
//             </StyledContent>
//           </StyledAccordion>
//           <StyledAccordion>
//             <StyledTitle>Handling Events</StyledTitle>
//             <StyledContent>
//               Handling events with React elements is very similar to handling events on DOM
//               elements. There are some syntactic differences:
//             </StyledContent>
//           </StyledAccordion>
//         </Collapsible>
//       </StyledAccordionContainer>
//     </>
//   )
// })
