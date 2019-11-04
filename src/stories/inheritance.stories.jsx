import * as React from 'react'
import { Collapser, Trigger, Panel } from '@/components'
import { Ui, dogs, cats } from '@/libs'

export default { title: 'Inheritance' }

export const unlimitedChilds = () => {
  return (
    <Ui
      title="Deep inheritance"
      description="Collapser inheritance with any childrens you want"
    >
      <Collapser>
        <Trigger>About dogs</Trigger>
        <Panel>
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </Panel>
        <Trigger>About cats</Trigger>
        <Panel>
          Here more details:
          <Collapser>
            <Trigger>Abyssinian Cat</Trigger>
            <Panel>
              <Collapser>
                {cats.map(({ catName, catText }, catKey) => (
                  <React.Fragment key={catKey}>
                    <Trigger>{catName}</Trigger>
                    <Panel>{catText}</Panel>
                  </React.Fragment>
                ))}
              </Collapser>
            </Panel>
          </Collapser>
          <Collapser>
            <Trigger>American Bobtail Cat Breed</Trigger>
            <Panel>
              Confident and friendly, the American Bobtail is a highly
              intelligent breed with a clownlike personality. Looking much like
              a bobtailed wildcat, this rare and athletic breed can be taught to
              walk on a leash.
            </Panel>
          </Collapser>
        </Panel>
      </Collapser>
    </Ui>
  )
}

export const dataMapping = () => {
  return (
    <Ui
      title="Data Mapping"
      description="Build collapser structure with arrays of data"
    >
      <Collapser>
        {dogs.map(({ dogName, dogText }, dogKey) => (
          <React.Fragment key={dogKey}>
            <Trigger>{dogName}</Trigger>
            <Panel>
              {dogText}
              <Collapser>
                {cats.map(({ catName, catText }, catKey) => (
                  <React.Fragment key={catKey}>
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

export const Reversed = () => {
  return (
    <Ui
      title="Data Mapping"
      description="Build collapser structure with arrays of data"
    >
      <Collapser>
        {dogs.map(({ dogName, dogText }, dogKey) => (
          <React.Fragment key={dogKey}>
            <Panel>
              {dogText}
              <Collapser>
                {cats.map(({ catName, catText }, catKey) => (
                  <React.Fragment key={catKey}>
                    <Panel>{catText}</Panel>
                    <Trigger>{catName}</Trigger>
                  </React.Fragment>
                ))}
              </Collapser>
            </Panel>
            <Trigger>{dogName}</Trigger>
          </React.Fragment>
        ))}
      </Collapser>
    </Ui>
  )
}
