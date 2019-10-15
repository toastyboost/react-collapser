import styled from "styled-components"

export const AccordionContainer = styled.div<any>``

export const TriggerStyled = styled.div<any>``

export const ContentStyled = styled.div<any>`
  overflow: ${(p) => (p.isOpen ? "auto" : "hidden")};
  ${(p) => (p.animated ? "transition: max-height 0.2s ease-in-out;" : "")}
`
