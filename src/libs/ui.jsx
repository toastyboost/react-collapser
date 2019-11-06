import * as React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Card } from 'antd'
import { Container, Title, Desc, ArticleContainer } from './styles'

export const Ui = ({ children, title, description, type }) => {
  return type === 'nowrap' ? (
    <ArticleContainer>
      <Card
        title={
          <>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
          </>
        }
        bordered={false}
      >
        {children}
      </Card>
    </ArticleContainer>
  ) : (
    <Container>
      <Card
        title={
          <>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
          </>
        }
        bordered={false}
      >
        {children}
      </Card>
    </Container>
  )
}
