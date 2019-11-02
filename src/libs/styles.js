// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components'
import { Collapser, Trigger, Panel } from '@/components'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'antd/dist/antd.css'

export const StyledCollapser = styled(Collapser)`
  border-radius: 3px;
  color: #fff;
  overflow: hidden;
`
export const StyledTrigger = styled(Trigger)`
  background-color: #845ec2;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
    border-bottom: 0;

    &-trigger {
      position: relative;
      padding: 12px 16px;
      color: rgba(0, 0, 0, 0.6);
      line-height: 22px;
      border-bottom: 1px solid #d9d9d9;
      transition: 0.3s;

      &:hover {
        color: rgba(0, 0, 0, 1);
      }

      &:before {
        content: '';
        border: solid rgba(0, 0, 0, 0.4);
        border-width: 0 1px 1px 0;
        display: inline-block;
        padding: 2.5px;
        margin-right: 12px;
        transform: rotate(-45deg);
        position: relative;
        top: -2px;
        left: -2px;
        transition: 0.3s;
      }

      &.open {
        &:before {
          transform: rotate(45deg);
          left: 0;
        }
      }
    }

    &-panel {
      padding: 0 16px;
      overflow: hidden;
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;

      &.open {
        border-bottom: 1px solid #d9d9d9;
        padding: 16px;
      }
    }
  }
`
