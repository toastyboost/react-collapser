import * as React from 'react'

import { Card } from 'antd'
import { Container } from './styles'

export const Ui = ({ children }) => {
  return (
    <Container>
      <Card title="Accordion" bordered={false}>
        {children}
      </Card>
    </Container>
  )
}
