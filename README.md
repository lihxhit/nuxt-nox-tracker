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
      config:{
        show_log: true,  // not required , default false
        sdk_url:'http(s)://CDN/sensorsdata.min.js', // sa-js-sdk url,required
        name:'sensors',   // global variable in window, default 'sensors'
        server_url:'your track server url' //  required
        ...
        // Full config list please refer to https://manual.sensorsdata.cn/sa/latest/sdk-api-web-7549300.html#
      }
    },
  },
}
```
