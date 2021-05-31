const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=a38918eb949d7b5333460d3a4655fc13&query=' +
    latitude +
    ',' +
    longitude

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to weather services', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      const data = body.current
      callback(undefined,'Weather description -  "' + data.weather_descriptions[0] + '". The current temperature is '+data.temperature+' degrees Celsius. There is '+data.precip +'% chance of precipitation today. The current humidity is '+data.humidity+'%.' )
    }
  })
}

module.exports = forecast

// const url =
//   'http://api.weatherstack.com/current?access_key=a38918eb949d7b5333460d3a4655fc13&query=28.928774,77.091278'

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect weather services')
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   } else {
//     const data = response.body.current
//     console.log(
//       data.weather_descriptions[0] +
//         '. It is currently ' +
//         data.temperature +
//         ' degrees out.' +
//         ' It feels like ' +
//         data.feelslike +
//         ' degrees out.',
//     )
//   }
// })
