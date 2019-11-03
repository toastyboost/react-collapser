import * as React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Card } from 'antd'
import { Container, Title, Desc } from './styles'

export const Ui = ({ children, title, description }) => {
  return (
    <Container>
      <Card
        title={
          <>
            <Title>{title}</Title>
            <Desc> {description}</Desc>
          </>
        }
        bordered={false}
      >
        {children}
      </Card>
    </Container>
  )
}
