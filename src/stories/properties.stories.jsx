import * as React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { boolean, number } from '@storybook/addon-knobs'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Switch, Divider } from 'antd'

import { Collapser, Trigger, Panel } from '@/components'
import { Ui, dogs, cats } from '@/libs'
import { Container } from '@/styles'

export default { title: 'Properties' }

export const alwaysOpen = () => {
  return (
    <Container>
      <Collapser alwaysOpen={boolean('1st panel is always open:', true)}>
        {dogs.map(({ dogName, dogText }, key) => (
          <React.Fragment key={key}>
            <Trigger>{dogName}</Trigger>
            <Panel>{dogText}</Panel>
          </React.Fragment>
        ))}
      </Collapser>
    </Container>
  )
}

export const alwaysOpenWithDefault = () => {
  return (
    <Container>
      <Collapser
        alwaysOpen={number('Collapser child which will always be open:', 3)}
      >
        {dogs.map(({ dogName, dogText }, dogKey) => (
          <React.Fragment key={dogKey}>
            <Trigger>{dogName}</Trigger>
            <Panel>
              {dogText}
              <Collapser>
                {cats.map(({ catName, catText }, catsKey) => (
                  <React.Fragment key={catsKey}>
                    <Trigger>{catName}</Trigger>
                    <Panel>{catText}</Panel>
                  </React.Fragment>
                ))}
              </Collapser>
            </Panel>
          </React.Fragment>
        ))}
      </Collapser>
    </Container>
  )
}

export const revealAll = () => {
  return (
    <Container>
      <Collapser revealed={boolean('Reveal all panels:', false)}>
        <Trigger>Abyssinian Cat</Trigger>
        <Panel>
          Abyssinians are highly intelligent and intensely inquisitive. They
          love to investigate and will leave no nook or cranny unexplored.
        </Panel>
        <Trigger>American Bobtail Cat Breed</Trigger>
        <Panel>
          Confident and friendly, the American Bobtail is a highly intelligent
          breed with a clownlike personality. Looking much like a bobtailed
          wildcat, this rare and athletic breed can be taught to walk on a
          leash.
        </Panel>
        <Trigger>Abyssinian Cat</Trigger>
        <Panel>
          Abyssinians are highly intelligent and intensely inquisitive. They
          love to investigate and will leave no nook or cranny unexplored.
        </Panel>
      </Collapser>
    </Container>
  )
}

export const controlledCollapser = () => {
  return (
    <Container>
      <Collapser controlled={boolean('Toggle all panels at collapser:', false)}>
        <Trigger>Abyssinian Cat</Trigger>
        <Panel>
          Abyssinians are highly intelligent and intensely inquisitive. They
          love to investigate and will leave no nook or cranny unexplored.
        </Panel>
        <Trigger>American Bobtail Cat Breed</Trigger>
        <Panel>
          Confident and friendly, the American Bobtail is a highly intelligent
          breed with a clownlike personality. Looking much like a bobtailed
          wildcat, this rare and athletic breed can be taught to walk on a
          leash.
        </Panel>
      </Collapser>
    </Container>
  )
}

export const controlledChild = () => {
  const [isOpen, toggle] = React.useState(false)

  return (
    <Ui
      title="Controlled childrens"
      description="You could choose which collapser childrens will be controlled"
    >
      <Switch onClick={() => toggle(!isOpen)} /> Controlled 1-st child
      <Divider />
      <Collapser>
        <Trigger controlled={isOpen}>Abyssinian Cat</Trigger>
        <Panel controlled={isOpen}>
          Abyssinians are highly intelligent and intensely inquisitive. They
          love to investigate and will leave no nook or cranny unexplored.
        </Panel>
        <Trigger>American Bobtail Cat Breed</Trigger>
        <Panel>
          Confident and friendly, the American Bobtail is a highly intelligent
          breed with a clownlike personality. Looking much like a bobtailed
          wildcat, this rare and athletic breed can be taught to walk on a
          leash.
        </Panel>
      </Collapser>
    </Ui>
  )
}

export const disabled = () => {
  const [isDisabled, toggle] = React.useState(true)
  return (
    <Ui
      title="Disable"
      description="You could use collapser animation out of box"
    >
      <Switch onClick={() => toggle(!isDisabled)} defaultChecked /> Disabled
      <Divider />
      <Collapser animated>
        <Trigger disabled={isDisabled}>Abyssinian Cat</Trigger>
        <Panel>
          Abyssinians are highly intelligent and intensely inquisitive. They
          love to investigate and will leave no nook or cranny unexplored.
        </Panel>
        <Trigger>American Bobtail Cat Breed</Trigger>
        <Panel>
          Confident and friendly, the American Bobtail is a highly intelligent
          breed with a clownlike personality. Looking much like a bobtailed
          wildcat, this rare and athletic breed can be taught to walk on a
          leash.
        </Panel>
        <Trigger>American Bobtail Cat Breed</Trigger>
        <Panel>
          Abyssinians are highly intelligent and intensely inquisitive. They
          love to investigate and will leave no nook or cranny unexplored.
        </Panel>
      </Collapser>
    </Ui>
  )
}

export const animated = () => {
  return (
    <Ui
      title="Animated collapser"
      description="You could use collapser animation out of box"
    >
      <Collapser animated>
        {dogs.map(({ dogName, dogText }, key) => (
          <React.Fragment key={key}>
            <Trigger>{dogName}</Trigger>
            <Panel>{dogText}</Panel>
          </React.Fragment>
        ))}
      </Collapser>
    </Ui>
  )
}

export const onChange = () => {
  const handleChange = (state) => {
    console.log('state', state)
  }
  return (
    <Ui
      title="Handle onChange"
      description="onChange event return current state of collpser"
    >
      <Collapser alwaysOpen onChange={handleChange}>
        {dogs.map(({ dogName, dogText }, key) => (
          <React.Fragment key={key}>
            <Trigger>{dogName}</Trigger>
            <Panel>{dogText}</Panel>
          </React.Fragment>
        ))}
      </Collapser>
    </Ui>
  )
}
