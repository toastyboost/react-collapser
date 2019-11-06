# 🏄‍ React-Collapser

Easy, fast and lightweight React collapse component for your `<App />`  
Fully controlled, zero dependencies, works out of the box, has advanced features.

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

In case when you need default design:

```
import 'react-collapser/default-styles.css'
```

## Why

Average size of most popular accordion packages are between 6.9 - 44.3kb (minified).  
Most of their features are not in demand. Time to improve it.

## Features

- [x] [Working out of the box](https://toastyboost.github.io/react-collapser/?path=/story/collapser--accordion)
- [x] [Controlled/Uncontrolled by demand](https://toastyboost.github.io/react-collapser/?path=/story/properties--controlled-collapser)
- [x] [Unlimited nesting](https://toastyboost.github.io/react-collapser/?path=/story/inheritance--defaut)
- [x] Only useful properties
- [x] [Unlimited styling in a way you need](https://toastyboost.github.io/react-collapser/?path=/story/styling--styled-components)
- [x] Default styles in external .css file
- [x] SSR friendly
- [x] Zero dependencies

# API

## Collapser

| Property   | Description                                                 | Type    | Default |
| ---------- | ----------------------------------------------------------- | ------- | ------- |
| alwaysOpen | Collapser always have one opened panel, 0 by default        | Boolean | false   |
| alwaysOpen | Collapser always have one opened panel, {number} by default | Number  | 0       |
| animated   | Initiate default animation                                  | Boolean | false   |
| openAll    | Reveal once all closed panels in Collapser                  | Boolean | false   |
| isOpen     | Collpaser becomes fully controlled                          | Boolean | false   |
| disabled   | Disable whole collapser                                     | Boolean | false   |

## Trigger / Panel

| Property | Description                                         | Type    | Default |
| -------- | --------------------------------------------------- | ------- | ------- |
| isOpen   | Panel or Trigger component becomes fully controlled | Boolean | false   |

## Trigger

| Property | Description                                        | Type    | Default |
| -------- | -------------------------------------------------- | ------- | ------- |
| disabled | Disable Trigger and linked to this Panel component | Boolean | false   |

&nbsp;

## Development

`yarn start` - run storybook for development on `http://localhost:7000`

`yarn build` - run Rollup for compile production build  
`yarn build-story` - build storybook

Made with:  
https://github.com/toastyboost/storybook-starter  
https://github.com/toastyboost/rollup-boilerplate

## Examples

![react-collapser demo](https://toastyboost.github.io/upload/react-collapser-demo.gif)

## TODO

- [ ] add tests
- [ ] add typescript
- [ ] resolve case with childs between trigger and panel
- [ ] add disable props
- [ ] link features and story book
- [ ] add gifs to most important features
