import { Accordion, Trigger, Content } from "./ui"

import styled from "styled-components"

export const StyledAccordion = styled<any>(Accordion)`
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  border-bottom: 0;
`

export const StyledTitle = styled<any>(Trigger)`
  position: relative;
  padding: 12px 16px;
  padding-left: 40px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 22px;
  cursor: pointer;
  transition: all 0.3s;
`
export const StyledContent = styled<any>(Content)`
  max-width: 200px;
`
