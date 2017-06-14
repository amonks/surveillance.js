import isogram from './isogram'

const ga = ({ trackingId }) => {
  isogram(trackingId)

  const track = data => {
    const e = {
      dimension1: 'something',
      eventAction: 'something',
      eventCategory: 'something',
      eventLabel: 'something',
      hitCallback: 'something',
      hitType: 'event',
      metric1: 'something',
    }

    window.ga('send', e)
  }

  return track
}

export default ga
