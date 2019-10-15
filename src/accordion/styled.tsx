import { Accordion, Trigger, Content } from "./index"
import styled from "styled-components"

export const StyledAccordion = styled<any>(Accordion)`
  border: 1px solid #000;
`

export const StyledTitle = styled<any>(Trigger)``
export const StyledContent = styled<any>(Content)`
  background-color: #f0f0f0;
  max-width: 200px;
`
