import * as React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Switch, Divider } from 'antd'

import { Collapser, Trigger, Panel } from '@/components'
import { Ui, dogs, cats } from '@/libs'

export default { title: 'Properties' }

export const alwaysOpen = () => {
  return (
    <Ui
      title="Always opened panels"
      description="Collapser have atleast one opened panel, by default with 0 index"
    >
      <Collapser alwaysOpen>
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

export const alwaysOpenWithDefault = () => {
  return (
    <Ui
      title="Always open with default index"
      description="You could use alwaysOpen feature and choose which panel will be opened by default"
    >
      <Collapser alwaysOpen={1}>
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
    </Ui>
  )
}

export const revealAll = () => {
  const [isAllOpen, toggle] = React.useState(false)

  return (
    <Ui title="Open all" description="You could reveal all collapser childrens">
      <Switch onClick={() => toggle(!isAllOpen)} defaultChecked={isAllOpen} />
      Controlled
      <Collapser revealed={isAllOpen}>
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
    </Ui>
  )
}

export const controlledCollapser = () => {
  const [isOpen, controlledToggle] = React.useState(false)

  return (
    <Ui
      title="Controlled collapser"
      description="You could controll all collapser childs"
    >
      <Switch onClick={() => controlledToggle(!isOpen)} /> Controlled
      <Divider />
      <Collapser controlled={isOpen}>
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
    </Ui>
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
