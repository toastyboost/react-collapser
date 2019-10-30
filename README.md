## React-Collapser

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://toastyboost.github.io/react-collapser)  
Basic and lightweight collapsible component for your App.

```
<Collapser>
  <Trigger>About dogs</Trigger>
  <Panel>
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
    found as a welcome guest in many households across the world.
  </Panel>
</Collapser>
```

## Installation

`yarn install react-collapser`

## Props

Always open - accordion have opened items, if boolean - if number - opened count of

## Features

Bem class states duplicating  
No useless parameters like id or index  
SSR friendly  
Gracefuly degradeted logic - if you dont want to customize - use props - if not - style yourself

## Development scritps

`yarn start` - run storybook for development on `http://localhost:7000`  
`yarn build-story` - build storybook
