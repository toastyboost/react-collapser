import * as React from 'react'
import { Collapser, Trigger, Panel } from '@/components'
import { Ui, dogs, cats } from '@/libs'

export default { title: 'Inheritance' }

export const defaut = () => {
  return (
    <Ui>
      <Collapser>
        <Trigger>About dogs</Trigger>
        <Panel>
          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
          found as a welcome guest in many households across the world.
        </Panel>
      </Collapser>
      <Collapser>
        <Trigger>About cats</Trigger>
        <Panel>
          Here more details:
          <Collapser>
            <Trigger>Abyssinian Cat</Trigger>
            <Panel>
              Abyssinians are highly intelligent and intensely inquisitive. They love to investigate
              and will leave no nook or cranny unexplored.
            </Panel>
          </Collapser>
          <Collapser>
            <Trigger>American Bobtail Cat Breed</Trigger>
            <Panel>
              Confident and friendly, the American Bobtail is a highly intelligent breed with a
              clownlike personality. Looking much like a bobtailed wildcat, this rare and athletic
              breed can be taught to walk on a leash.
            </Panel>
          </Collapser>
        </Panel>
      </Collapser>
    </Ui>
  )
}

export const Mapping = () => {
  return (
    <Ui>
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
