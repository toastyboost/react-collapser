import * as React from 'react'
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
