const apiEarthquake = require('./index')

apiEarthquake()
    .then(count => {
        console.log(count)
    })
    .catch(err => {
        console.log(err)
    })