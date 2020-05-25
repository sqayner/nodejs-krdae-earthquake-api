# krdae-earthquake-api
```const apiEarthquake = require('./earthquake')

apiEarthquake()
    .then(count => {
        console.log(JSON.stringify(count))
    })
    .catch(err => {
        console.log(err)
    })```
