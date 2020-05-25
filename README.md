# KRDAE EARTHQUAKE API (NODE.JS)

## USAGE
1. Add [request-promise](https://www.npmjs.com/package/request-promise) library to your project. You can use `> npm i request-promise`
2. Earthquake.js file add to project root
3. You can use the API with the code below.
```javascript
const apiEarthquake = require('./earthquake')

apiEarthquake()
    .then(count => {
        console.log(count)
    })
    .catch(err => {
        console.log(err)
    })
```

## EXAMPLE RESPONSE
```json
{
    "result": [
        {
            "magnitude": "2.1",
            "latitude": "38.4082",
            "longitude": "39.2232",
            "location": "DORTBOLUK-SIVRICE(ELAZIG)",
            "depth": "5.0",
            "timestamp": 1590447292,
            "time": "2020.05.2522:54:52"
        },
        {
            "magnitude": "2.7",
            "latitude": "35.5043",
            "longitude": "26.7700",
            "location": "AKDENIZ",
            "depth": "4.5",
            "timestamp": 1590446865,
            "time": "2020.05.2522:47:45"
        },
        ...
    ]
}
```

## DATA SOURCE
