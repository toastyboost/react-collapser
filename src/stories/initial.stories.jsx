import * as React from 'react'
import { Collapser, Trigger, Panel } from '@/components'
import { Container } from '@/styles'

export default { title: 'Collapser' }

export const Tab = () => {
  return (
    <Container>
      <Collapser>
        <Trigger>About dogs</Trigger>
        <Panel>
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </Panel>
      </Collapser>
    </Container>
  )
}

export const Accordion = () => {
  return (
    <Container>
      <Collapser>
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
