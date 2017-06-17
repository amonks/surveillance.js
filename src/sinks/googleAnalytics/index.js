import isogram from './isogram'

/**
 * ### surveillance.sinks.googleAnalytics
 *
 * ({ trackingId: string }) => Object => Object
 */

const ga = ({ trackingId }) => {
  isogram(trackingId)

  const track = data => {
    window.ga('send', data)
    return data
  }

  return track
}

export default ga
