import styled from "styled-components"

export const AccordionContainer = styled.div<any>`
  overflow: ${(p) => (p.isOpen ? "auto" : "hidden")};
  opacity: ${(p) => (p.isOpen ? 1 : 0)};
  ${(p) =>
    p.animated
      ? "transition: max-height .4s cubic-bezier(.075, .82, .165, 1), opacity 0.4s  cubic-bezier(.075, .82, .165, 1);"
      : ""}
`
