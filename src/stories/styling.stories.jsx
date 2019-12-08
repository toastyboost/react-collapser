import * as React from 'react'
import { Collapser, Trigger, Panel } from '@/components'

import { StyledCollapser, StyledTrigger, StyledPanel, dogs, Ui } from '@/libs'
import '@/styles/default-styles.css'

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

export const externalStyles = () => {
  return (
    <Ui
      title="Styling"
      description="With external collapser-styles.css from /dist"
      type="nowrap"
    >
      <Collapser>
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

export const withoutStyles = () => {
  return (
    <Collapser>
      {dogs.map(({ dogName, dogText }, key) => (
        <React.Fragment key={key}>
          <Trigger>{dogName}</Trigger>
          <Panel>{dogText}</Panel>
        </React.Fragment>
      ))}
    </Collapser>
  )
}
