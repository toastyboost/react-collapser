import { Accordion, Trigger, Content } from "./ui"

import styled from "styled-components"

const pseudoDefault = `
  content: '';
  z-index: 100;
  display: inline-block;
`

const DirectionArrow = (width: number, color: string) => `
  ${pseudoDefault};
  width: ${width * 3}px;
  height: ${width * 3}px;
  border-right: ${width / 2}px solid ${color};
  border-top: ${width / 2}px solid ${color};
`

export const StyledAccordion = styled<any>(Accordion)`
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  border-bottom: 0;
  border-radius: 3px;
  margin: 16px;
`
export const StyledTitle = styled<any>(Trigger)`
  position: relative;
  padding: 12px 16px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 22px;

  &:before {
    ${DirectionArrow(2, "#333")}
    transform: rotate(45deg);
    margin-right: 16px;
    position: relative;
    top: -2px;
    transition: 0.3s;
  }

  &.isOpen {
    &:before {
      transform: rotate(135deg);
    }
  }
`

export const StyledContent = styled<any>(Content)`
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  padding: 0 16px;

  &.isOpen {
    padding: 16px;
  }
`

export const StyledControls = styled.div<any>`
  padding: 16px;
`

export const StyledAccordionContainer = styled.div<any>`
  margin-top: 16px;

  .accordion {
    margin-top: -1px;
    margin-bottom: 0;
  }
`
