import styled from "styled-components"

type AccordionContentProps = {
  isOpen?: boolean
  isAnimated?: boolean
  animation?: string
  initialStyles: {
    height: string
    paddingRight: string
    paddingLeft: string
    padding: string
  }
}

export const AccordionContent = styled.div<AccordionContentProps>`
  overflow: ${({ isOpen }) => (isOpen ? "auto" : "hidden")};
  max-height: ${({ isOpen }) => (isOpen ? "100px" : 0)};

  ${(p) => p.isAnimated && (p.animation ? `transition: ${p.animation}` : "transition: .3s;")};
`
