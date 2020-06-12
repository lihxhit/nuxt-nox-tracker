const ID = '<%= options.id %>';

export default function ({app: {router}}, inject) {
    window.dataLayer = window.dataLayer || []
    function gtag () {
      dataLayer.push(arguments)
      if(<%= options.debug %>){
        console.debug('gtag tracking called with following arguments:', arguments)
      }
    }
    inject('gtag', gtag)
    gtag('js', new Date())
    gtag('config',ID,<%= JSON.stringify(options.config, null, 2) %>)
  
      router.afterEach((to) => {
        gtag('config', ID, {'page_path': to.fullPath})
      })

}
  