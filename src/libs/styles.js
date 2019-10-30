import styled from 'styled-components'

import 'antd/dist/antd.css'

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
      background-color: #fff;
      padding: 0 16px;

      &--open {
        padding: 16px;
      }
    }

    &-trigger {
      position: relative;
      padding: 12px 16px;
      color: rgba(0, 0, 0, 0.85);
      line-height: 22px;
    }
  }
`
