import * as React from "react"
import styled from "styled-components"

import { Card } from "antd"

import "antd/dist/antd.css"

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

export const Container = styled.div<any>`
  background: #ececec;
  padding: 32px;
  display: flex;

  .accordion {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-bottom: 0;
    border-radius: 3px;

    &-nested {
      margin-top: 12px;
    }

    &-content {
      background-color: #fff;
      border-bottom: 1px solid #d9d9d9;
      padding: 0 16px;

      &.isOpen {
        padding: 16px;
      }
    }

    &-trigger {
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
      }

      &.isOpen {
        &:before {
          transform: rotate(135deg);
        }
      }
    }
  }

  .collapsible {
    border-radius: 3px;
    border: 1px solid #d9d9d9;

    > .accordion {
      margin-top: -1px;
      margin-bottom: -1px;
      border-radius: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 0;
    }
  }
`

export const Ui: React.FC<any> = ({ children }) => {
  return (
    <Container>
      <Card title="Accordion" bordered={false}>
        {children}
      </Card>
    </Container>
  )
}
