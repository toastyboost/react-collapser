// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components'
import { Collapser, Trigger, Panel } from '@/components'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'antd/dist/antd.css'

export const StyledCollapser = styled(Collapser)`
  margin-top: 12px;
  border-radius: 3px;
  color: #fff;
  overflow: hidden;
`

export const StyledTrigger = styled(Trigger)`
  background-color: #845ec2;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: #fff;

  &[aria-expanded='true'] {
    &:before {
      content: '[+] ';
    }
  }
`
export const StyledPanel = styled(Panel)`
  background-color: #ff6f91;
  padding: 0 16px;
  overflow: hidden;

  &[aria-expanded='true'] {
    padding: 16px;
  }

  &[aria-disabled='true'] {
    cursor: auto;
  }
`

export const ShowMore = styled(Trigger)`
  background-color: #ececec;
  display: inline-block;
  margin: 12px 0;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`

export const ArticleContainer = styled.div`
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
`
export const Title = styled.div`
  width: 100%;
`

export const Desc = styled.div`
  font-weight: 400;
  font-size: 14px;
`
