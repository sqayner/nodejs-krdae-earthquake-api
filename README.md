# KRDAE EARTHQUAKE API



```javascript
const apiEarthquake = require('./earthquake')

apiEarthquake()
    .then(count => {
        console.log(JSON.stringify(count))
    })
    .catch(err => {
        console.log(err)
    })
```


```json
{
result: [
{
magnitude: "2.5",
latitude: "38.3335",
longitude: "44.3443",
location: "GELENLER-BASKALE(VAN)",
depth: "6.9",
timestamp: 1590426749,
time: "2020.05.25 17:12:29"
},
{
magnitude: "3.2",
latitude: "34.2502",
longitude: "25.5082",
location: "GIRITADASIACIKLARI(AKDENIZ)",
depth: "7.8",
timestamp: 1590419087,
time: "2020.05.25 15:04:47"
},
...
]
}
```
