import styled from 'styled-components'
import { Collapser, Trigger, Panel } from '@/components'

import 'antd/dist/antd.css'

export const StyledCollapser = styled(Collapser)`
  border-radius: 3px;
  overflow: hidden;
`
export const StyledTrigger = styled(Trigger)`
  background-color: #845ec2;
  color: #fff;
  padding: 12px 16px;
`
export const StyledPanel = styled(Panel)`
  background-color: #ff6f91;
  padding: 0 16px;

  &.open {
    padding: 16px;
  }
`

export const Container = styled.div`
  background: #ececec;
  padding: 32px 32px 32px 32px;
  display: flex;
  width: 100%;

  .ant-card {
    width: 100%;
  }

  .ant-card-body {
    padding-top: 12px;
  }

  .collapser {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    margin-top: 12px;

    &-trigger {
      position: relative;
      padding: 12px 16px;
      line-height: 22px;
      background-color: #f1f1f1;

      &.open {
        border-bottom: 1px solid #d9d9d9;
      }
    }

    &-panel {
      padding: 0 16px;
      border-bottom: 1px solid #d9d9d9;

      &.open {
        padding: 16px;
      }
    }
  }
`
