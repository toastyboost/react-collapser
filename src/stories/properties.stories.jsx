import * as React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Switch, Divider } from 'antd'

import { Collapser, Trigger, Panel } from '@/components'
import { Ui, dogs, cats } from '@/libs'

export default { title: 'Properties' }

export const alwaysOpen = () => {
  return (
    <Ui>
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

export const alwaysOpenWithNumber = () => {
  return (
    <Ui>
      <Collapser alwaysOpen={1}>
        {dogs.map(({ dogName, dogText }) => (
          <>
            <Trigger>{dogName}</Trigger>
            <Panel>
              {dogText}
              <Collapser>
                {cats.map(({ catName, catText }) => (
                  <>
                    <Trigger>{catName}</Trigger>
                    <Panel>{catText}</Panel>
                  </>
                ))}
              </Collapser>
            </Panel>
          </>
        ))}
      </Collapser>
    </Ui>
  )
}

export const openAll = () => {
  const [isAllOpen, toggle] = React.useState(false)

  return (
    <Ui>
      <Switch onClick={() => toggle(!isAllOpen)} /> Open
      <Divider />
      <Collapser openAll={isAllOpen} alwaysOpen>
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

export const animated = () => {
  return (
    <Ui>
      <Collapser animated>
        {dogs.map(({ dogName, dogText }) => (
          <>
            <Trigger>{dogName}</Trigger>
            <Panel>{dogText}</Panel>
          </>
        ))}
      </Collapser>
    </Ui>
  )
}
