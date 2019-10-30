import * as React from 'react'
import { Collapser, Trigger, Panel } from '@/components'
import { Ui } from '@/libs'

export default { title: 'Collapser' }

export const Tab = () => {
  return (
    <Ui>
      <Collapser>
        <Trigger>About dogs</Trigger>
        <Panel>
          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
          found as a welcome guest in many households across the world.
        </Panel>
      </Collapser>
    </Ui>
  )
}

export const Accordion = () => {
  return (
    <Ui>
      <Collapser>
        <Trigger>About dogs</Trigger>
        <Panel>
          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
          found as a welcome guest in many households across the world.
        </Panel>
        <Trigger>Abyssinian Cat</Trigger>
        <Panel>
          Abyssinians are highly intelligent and intensely inquisitive. They love to investigate and
          will leave no nook or cranny unexplored.
        </Panel>
      </Collapser>
    </Ui>
  )
}
