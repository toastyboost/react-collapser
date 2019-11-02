# React-Collapser

Basic, fast and lightweight collapsible component for your `<App />`.  
Zero dependencies, working from a box.

![npm bundle size](https://img.shields.io/bundlephobia/min/react-collapser?color=success&label=Minified) ![David](https://img.shields.io/david/toastyboost/react-collapser?label=Dependencies)

```
yarn add react-collapser
```

## Usage

```
import * as React from 'react'
import {Collapser, Trigger, Panel } from 'react-collapser'

<Collapser>
  <Trigger>About dogs</Trigger>
  <Panel>
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
    found as a welcome guest in many households across the world.
  </Panel>
</Collapser>
```

More examples:  
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://toastyboost.github.io/react-collapser)

## Features

[x] Rollup compile  
[x] Bem class states duplicating, but no preserve class becouse its unneccessary  
[x] No useless parameters like id or index
[x] SSR friendly  
[x] Gracefuly degradeted logic - if you dont want to customize - use props - if not - style yourself  
[x] Zero dependencies

## Props

Always open - accordion have opened items, if boolean - if number - opened count of  
Animated

## Development

`yarn start` - run storybook for development on `http://localhost:7000`  
`yarn build` - run Rollup for compile production build  
`yarn build-story` - build storybook

## TODO

add tags to package.json  
add bages
