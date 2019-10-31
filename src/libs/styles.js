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
`
export const StyledPanel = styled(Panel)`
  background-color: #ff6f91;
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

    &-panel {
      padding: 0 16px;

      &--open {
        padding: 16px;
      }
    }

    &-trigger {
      position: relative;
      padding: 12px 16px;
      line-height: 22px;
    }
  }
`
