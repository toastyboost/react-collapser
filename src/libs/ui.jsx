import * as React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Card } from 'antd'
import { Container } from './styles'

export const Ui = ({ children }) => {
  return (
    <Container>
      <Card title="Collapse example" bordered={false}>
        {children}
      </Card>
    </Container>
  )
}
