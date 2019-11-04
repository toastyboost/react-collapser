import * as React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Card } from 'antd'
import { Container, Title, Desc, ArticleContainer } from './styles'

export const Ui = ({ children, title, description, type }) => {
  const Content = () => (
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
  )
  return type === 'article' ? (
    <ArticleContainer>
      <Content />
    </ArticleContainer>
  ) : (
    <Container>
      <Content />
    </Container>
  )
}
