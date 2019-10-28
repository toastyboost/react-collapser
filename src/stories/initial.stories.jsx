import * as React from 'react'
import { Collapser, Trigger, Panel } from '@/components'
import { Ui } from '@/libs/ui'

export default { title: 'Starter' }

// export const defaultInition = () => {
//   return (
//     <Ui>
//       <Collapser>
//         <Trigger>Learn Once, Write Anywhere</Trigger>
//         <Panel>
//           We don’t make assumptions about the rest of your technology stack, so you can develop new
//           features in React without <a>rewriting</a> existing code
//         </Panel>
//       </Collapser>
//     </Ui>
//   )
// }

// export const multipleCollapsers = () => {
//   return (
//     <Ui>
//       <Collapser>
//         <Trigger>Learn Once, Write Anywhere</Trigger>
//         <Panel>
//           We don’t make assumptions about the rest of your technology stack, so you can develop new
//           features in React without <a>rewriting</a> existing code
//         </Panel>
//       </Collapser>
//       <Collapser>
//         <Trigger>Learn Once, Write Anywhere</Trigger>
//         <Panel>
//           We don’t make assumptions about the rest of your technology stack, so you can develop new
//           features in React without <a>rewriting</a> existing code
//         </Panel>
//       </Collapser>
//     </Ui>
//   )
// }

// export const nestedCollapsers = () => {
//   return (
//     <Ui>
//       <Collapser>
//         <Trigger>1</Trigger>
//         <Panel>
//           About the rest of your technology stack:
//           <Collapser>
//             <Trigger>1 nested</Trigger>
//             <Panel>
//               We don’t make assumptions about the rest of your technology stack, so you can develop
//               new features in React without <a>rewriting</a> existing code
//             </Panel>
//           </Collapser>
//         </Panel>
//       </Collapser>

//       <Collapser>
//         <Trigger>2</Trigger>
//         <Panel>
//           We don’t make assumptions about the rest of your technology stack, so you can develop new
//           features in React without <a>rewriting</a> existing code
//         </Panel>
//       </Collapser>
//     </Ui>
//   )
// }

export const dependetCollapsers = () => {
  return (
    <Ui>
      <Collapser collapsible={true}>
        test
        <Collapser>
          <Trigger>1</Trigger>
          <Panel>About the rest of your technology stack:</Panel>
        </Collapser>
        <Collapser>
          <Trigger>2</Trigger>
          <Panel>
            We don’t make assumptions about the rest of your technology stack, so you can develop
            new features in React without <a>rewriting</a> existing code
          </Panel>
        </Collapser>
      </Collapser>
    </Ui>
  )
}
