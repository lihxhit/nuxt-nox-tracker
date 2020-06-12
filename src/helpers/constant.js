exports.DEFAULT_OPTIONS = {
  debug: false,
  gtag: {
    id: '',
    debug: false,
    config: {
      send_page_view: false,
    },
  },
  sa: {
    id: '',
    config: {
      show_log: true,
      sdk_url: 'https://res06.bignox.com/noxfed/scripts/sensorsdata.min.js',
      name: 'sensors',
      server_url: 'https://bi.noxgroup.com/sa',
    },
    global: {},
  },
  hmt: {},
}
