import Vue from 'vue'
const SA_ID = '<%= options.sa.id %>'
const SA_NAME = '<%= options.sa.config.name %>'
export default function ({ route }, inject) {
  inject('noxTrack', (userOptions) => {
    const options =
      typeof userOptions === 'object'
        ? userOptions
        : {
            name: userOptions,
          }
    if (SA_ID) {
      window[SA_NAME].track('btn_click', {
        name: options.name,
        ...options,
        $url: `${location.href}`,
        $url_path: `${location.pathname}`,
      })
    }
  })
}

Vue.directive('nox-track', {
  bind(el, binding, vnode) {
    el.handler = () => {
      const value = binding.value
      vnode.context.$noxTrack(value)
    }
    el.addEventListener('click', el.handler, false)
  },
  unbind() {
    // el.removeEventListener('click', el.handler, false)
  },
})
