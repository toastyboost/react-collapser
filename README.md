# 🏄‍♂️ React-Collapser

Easy, fast and lightweight React collapse component for your `<App />`  
Fully controlled, zero dependencies, works out of the box, has advanced features.  
Made with functional components, hooks and latest React.

[![npm](https://img.shields.io/npm/v/react-collapser)](https://toastyboost.github.io/react-collapser) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-collapser?color=success&label=minified) [![Build Status](https://travis-ci.org/toastyboost/react-collapser.svg?branch=master)](https://travis-ci.org/toastyboost/react-collapser) ![David](https://img.shields.io/david/toastyboost/react-collapser?label=dependencies) &nbsp; [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://toastyboost.github.io/react-collapser)

## Install

```
yarn add react-collapser
npm i react-collapser
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

If you need default styles for collapser:

```
import 'react-collapser/dist/default-styles.css'
```

All possible variations of use on [storybook](https://toastyboost.github.io/react-collapser)

## Why

Average size of most popular accordion packages are between 6.9 - 44.3kb (minified).  
Most of their features are not in demand. Made with oldfashion classes.

## Examples

![react-collapser demo](https://toastyboost.github.io/upload/react-collapser-demo.gif)

## Features

- [x] [Working out of the box](https://toastyboost.github.io/react-collapser/?path=/story/collapser--accordion)
- [x] [Controlled/Uncontrolled by demand](https://toastyboost.github.io/react-collapser/?path=/story/properties--controlled-collapser)
- [x] [Unlimited nesting](https://toastyboost.github.io/react-collapser/?path=/story/inheritance--defaut)
- [x] Only useful properties
- [x] [Unlimited styling in a way you need](https://toastyboost.github.io/react-collapser/?path=/story/styling--styled-components)
- [x] Default styles in external .css file
- [x] SSR friendly, tested by Gatsby
- [x] Basic WAI-ARIA atributes for accessibility
- [x] Zero dependencies
- [x] 🌳Tree-Shakeable

## API

### Collapser

| Property   | Description                                     | Type    | Default       |
| ---------- | ----------------------------------------------- | ------- | ------------- |
| alwaysOpen | Collapser have first always opened panel        | Boolean | false         |
| alwaysOpen | Collapser have one always opened panel          | Number  | 0             |
| reveal     | Reveal all nested panels and triggers           | Boolean | false         |
| controlled | Collpaser becomes fully controlled by this prop | Boolean | false         |
| animated   | Initiate default animation                      | Boolean | false         |
| disabled   | Disable whole collapser                         | Boolean | false         |
| onChange   | Return state of collapser                       | Event   | {activeIndex} |

### Trigger / Panel

| Property   | Description                                         | Type    | Default |
| ---------- | --------------------------------------------------- | ------- | ------- |
| controlled | Panel or Trigger component becomes fully controlled | Boolean | false   |
| disabled   | Disable Trigger and linked to this Panel component  | Boolean | false   |

&nbsp;

---

&nbsp;

## Development

`yarn start` - run Storybook for development on `http://localhost:7000`

`yarn build` - run Rollup to compile production build  
`yarn story` - build Storybook for development

Made with:  
https://github.com/toastyboost/storybook-starter  
https://github.com/toastyboost/rollup-boilerplate

## TODO

- [ ] add tests
- [ ] add typescript
- [ ] resolve case with childs between trigger and panel
- [ ] link features and story book
- [ ] add gifs to most important features
- [ ] add star motivation
- [ ] add knobs
- [ ] remove antd
- [ ] add Docs addon to storybook
- [ ] add labels in titles to duplicate states
- [ ] add links from props table to storybook
- [ ] add eslint ignore
- [ ] auto copy styles to dist while build
- [ ] tab option to ignore click on same tab
- [ ] bug with 0 always open child
