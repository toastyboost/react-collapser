// // storiesOf("Controlled with", module).add("Default state", () => {
// //   const [isOpenParent, toggleFromParent] = React.useState<boolean>(false)
// //   const [isOpenChild, toggleFromChild] = React.useState<boolean>(false)

// //   return (
// //     <ToolBox isOpen={isOpenChild} onToggle={toggleFromParent} defaultDisabled defaultOpen>
// //       <StyledAccordion
// //         isOpen={isOpenParent}
// //         onToggle={(isOpen: boolean) => {
// //           toggleFromChild(isOpen)
// //         }}
// //         defaultOpen
// //       >
// //         <StyledTitle>Learn Once, Write Anywhere</StyledTitle>
// //         <StyledContent>
// //           We don’t make assumptions about the rest of your technology stack, so you can develop new
// //           features in React without <a>rewriting</a> existing code
// //         </StyledContent>
// //       </StyledAccordion>
// //     </ToolBox>
// //   )
// // })

// // storiesOf("Collapsible", module).add("Show all", () => {
// //   const [openAll, toggle] = React.useState<boolean>(true)

// //   return (
// //     <>
// //       <StyledControls>
// //         <Switch onClick={() => toggle(!openAll)} checked={openAll} /> showAll:&nbsp;
// //         <b>{openAll ? "true" : "false"}</b>
// //       </StyledControls>
// //       <StyledAccordionContainer>
// //         <Collapsible isAnimated alwaysOpen openAll={openAll}>
// //           <StyledAccordion>
// //             <StyledTitle>Introducing JSX</StyledTitle>
// //             <StyledContent>
// //               This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a
// //               syntax extension to JavaScript. We recommend using it with React to describe what the
// //               UI should look like. JSX may remind you of a template language, but it comes with the
// //               full power of JavaScript.
// //             </StyledContent>
// //           </StyledAccordion>
// //           <StyledAccordion>
// //             <StyledTitle>Components and Props</StyledTitle>
// //             <StyledContent>
// //               Components let you split the UI into independent, reusable pieces, and think about
// //               each piece in isolation. This page provides an introduction to the idea of components.
// //             </StyledContent>
// //           </StyledAccordion>
// //           <StyledAccordion>
// //             <StyledTitle>Handling Events</StyledTitle>
// //             <StyledContent>
// //               Handling events with React elements is very similar to handling events on DOM
// //               elements. There are some syntactic differences:
// //             </StyledContent>
// //           </StyledAccordion>
// //         </Collapsible>
// //       </StyledAccordionContainer>
// //     </>
// //   )
// // })
