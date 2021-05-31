const request = require('request')

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoieW9nZXNoOTY0MyIsImEiOiJja3A3NjBlaXIwNmpvMnZtcnZ0ZDJ2dGxmIn0.yw2cd7raPthzGXL6BW3Tnw'
  request({ url: url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to location services', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find the location. Try another search.', undefined)
    } else {
      callback(undefined, {
        location: body.features[0].place_name,
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
      })
    }
  })
}

module.exports = geocode

// const geocodeURL =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieW9nZXNoOTY0MyIsImEiOiJja3A3NjBlaXIwNmpvMnZtcnZ0ZDJ2dGxmIn0.yw2cd7raPthzGXL6BW3Tnw'

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to Geocode services')
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find location. Try another search.')
//   } else {
//     const longitude = response.body.features[0].center[0]
//     const latitude = response.body.features[0].center[1]
//     console.log(latitude, longitude)
//   }
// })

