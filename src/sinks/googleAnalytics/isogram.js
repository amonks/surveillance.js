const isogram = trackingId => {
  // this is the regular i s o g r a m code, just unminified
  // http://code.stephenmorley.org/javascript/understanding-the-google-analytics-tracking-code/

  // store the name of the Analytics object
  window.GoogleAnalyticsObject = 'ga'

  // check whether the Analytics object is defined
  if (!('ga' in window)) {
    // define the Analytics object
    window.ga = function() {
      window.ga.q.push(arguments)
    }

    // create the queue
    window.ga.q = []
  }

  // store the current timestamp
  window.ga.l = new Date().getTime()

  // create a new script element
  var script = document.createElement('script')
  script.src = '//www.google-analytics.com/analytics.js'
  script.async = true

  // insert the script element into the document
  var firstScript = document.getElementsByTagName('script')[0]
  firstScript.parentNode.insertBefore(script, firstScript)

  window.ga('create', trackingId, { cookieDomain: 'none' })
}

export default isogram
