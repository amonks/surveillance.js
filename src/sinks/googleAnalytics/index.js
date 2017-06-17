import isogram from './isogram'

const ga = ({ trackingId }) => {
  isogram(trackingId)

  const track = data => {
    window.ga('send', data)
  }

  return track
}

export default ga
