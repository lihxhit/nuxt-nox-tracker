# nuxt-nox-tracker

## Installation

```git
$ yarn add nuxt-nox-tracker -D
or
$ npm install nuxt-nox-tracker -D
```

## Usage

```js
/* nuxt.config.js*/
{
  buildModules:['nuxt-nox-tracker'],
  noxTracker: {
    gtag: {
      id: 'UA-XXXXXXXX-X',
    },
    sa: {
      id: 'YOUR PRODUCT NAME',
    },
  },
}
```
