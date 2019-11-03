import * as React from 'react'

import { StyledCollapser, StyledTrigger, StyledPanel, Ui, dogs } from '@/libs'

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
