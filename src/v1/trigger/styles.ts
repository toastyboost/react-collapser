import styled from "styled-components"

type AccordionTriggerProps = {
  isOpen?: boolean
}

export const AccordionTrigger = styled.div<AccordionTriggerProps>`
  cursor: pointer;
`
