let client = null

const init = () =>
  new Promise(resolve => {
    if (client) return resolve(client)

    const head = document.getElementsByTagName('head')[0]
    const script = document.createElement('script')
    let loaded
    script.onload = script.onerror = script.onreadystatechange = function() {
      if (
        (script.readyState && !/^c|loade/.test(script.readyState)) ||
        loaded
      ) {
        return
      }
      script.onload = script.onreadystatechange = null
      loaded = 1
      client = window.Keen
      resolve(client)
    }
    script.async = 1
    script.src =
      'https://d26b395fwzu5fz.cloudfront.net/keen-tracking-1.1.3.min.js'
    head.parentNode.insertBefore(script, head)
  })

export default init
