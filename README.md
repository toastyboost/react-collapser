# 🏄‍ React-Collapser

![npm bundle size](https://img.shields.io/bundlephobia/min/react-collapser?color=success&label=minified) [![Build Status](https://travis-ci.org/toastyboost/react-collapser.svg?branch=master)](https://travis-ci.org/toastyboost/react-collapser) ![David](https://img.shields.io/david/toastyboost/react-collapser?label=dependencies) &nbsp; [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://toastyboost.github.io/react-collapser)

Basic, fast and lightweight React collapse component for your `<App />`  
Zero dependencies, works out of the box, a lot of features.

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

## Install

```
yarn add react-collapser
npm i react-collapser
```

## Features

- [x] Unlimited nesting
- [x] Only nessesary properties
- [x] Style component exactly how you need
- [x] SSR friendly
- [x] Gracefuly degradeted logic - if you dont want to customize - use props - if not - style yourself
- [x] Zero dependencies

## Component API

`alwaysOpen` - collapser always have at least one opened section. Boolean/Number. If number, open collapser with property.  
`animated` - initiate default animation.
`openLll` - prop for controled opening of all collapser items

## Demo

![react-collapser demo](https://toastyboost.github.io/upload/react-collapser-demo.gif)

Styling with styled-components or react predefined CSS classes, which repeats DOM structure and states.

## Development setup

`yarn start` - run storybook for development on `http://localhost:7000`  
`yarn build` - run Rollup for compile production build  
`yarn build-story` - build storybook

-[x] For build we are suing Rollup

## TODO

add tags to package.json  
add css files with ready styles  
add disable props  
add controlled state
