import * as React from 'react'
import { Collapser, Panel } from '@/components'

import {
  StyledCollapser,
  StyledTrigger,
  StyledPanel,
  ShowMore,
  dogs,
  Ui
} from '@/libs'

export default { title: 'Styling' }

export const styledComponents = () => {
  return (
    <Ui title="Styling" description="With styled components">
      <StyledCollapser alwaysOpen animated>
        {dogs.map(({ dogName, dogText }, key) => (
          <React.Fragment key={key}>
            <StyledTrigger>{dogName}</StyledTrigger>
            <StyledPanel>{dogText}</StyledPanel>
          </React.Fragment>
        ))}
      </StyledCollapser>
    </Ui>
  )
}

export const CombineStyling = () => {
  return (
    <Ui title="Article style" description="With custom trigger" type="article">
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
      <Collapser>
        <ShowMore>Read more about Bobtail</ShowMore>
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
