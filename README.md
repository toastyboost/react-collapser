# 🏄‍ React-Collapser

Basic, fast and lightweight React collapse component for your `<App />`  
Fully controlled, zero dependencies, works out of the box and a lot of other features.

![npm bundle size](https://img.shields.io/bundlephobia/min/react-collapser?color=success&label=minified) [![Build Status](https://travis-ci.org/toastyboost/react-collapser.svg?branch=master)](https://travis-ci.org/toastyboost/react-collapser) ![David](https://img.shields.io/david/toastyboost/react-collapser?label=dependencies) &nbsp; [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://toastyboost.github.io/react-collapser)

## Install

```
yarn add react-collapser
```

## Usage

```
import * as React from 'react'
import { Collapser, Trigger, Panel } from 'react-collapser'

<Collapser>
  <Trigger>About dogs</Trigger>
  <Panel>
    A dog is a type of domesticated animal. Known for its
    loyalty and faithfulness, it can be found as a welcome guest
    in many households across the world.
  </Panel>
</Collapser>
```

## Features

- [x] Unlimited nesting
- [x] Only nessesary properties
- [x] Unlimited styling in a way you need
- [x] SSR friendly
- [x] Common features without any props
- [x] Zero dependencies

## Component API

### Collapser

| Property   | Description                                      | Type    | Default |
| ---------- | ------------------------------------------------ | ------- | ------- |
| alwaysOpen | Collapser always have at least one opened panel  | Boolean | false   |
| alwaysOpen | If Number, Collapser shows Panel with this index | Number  | 0       |
| animated   | Initiate default animation                       | Boolean | false   |
| openAll    | Reveal all closed panels in Collapser            | Boolean | false   |
| isOpen     | Collpaser becomes fully controlled               | Boolean | false   |

### Trigger / Panel

| Property | Description                               | Type    | Default |
| -------- | ----------------------------------------- | ------- | ------- |
| isOpen   | Panel or Trigger becomes fully controlled | Boolean | false   |

## Demo

![react-collapser demo](https://toastyboost.github.io/upload/react-collapser-demo.gif)

## Development

`yarn start` - run storybook for development on `http://localhost:7000`  
`yarn build` - run Rollup for compile production build  
`yarn build-story` - build storybook

Made with:  
https://github.com/toastyboost/storybook-starter  
https://github.com/toastyboost/rollup-boilerplate

## TODO

add css files with ready styles  
add disable props  
link features and story book
add gifs to most important features
