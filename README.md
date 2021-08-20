# KRDAE EARTHQUAKE API (NODE.JS)

## USAGE
1. `> npm i nodejs-krdae-earthquake-api`
2. You can use the API with the code below.
```javascript
const apiEarthquake = require('nodejs-krdae-earthquake-api')

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
  "source_url": "http://www.koeri.boun.edu.tr/scripts/lst2.asp",
  "result": [
        {
            "magnitude": 2.4,
            "coordinates": {
                "latitude": 36.9348,
                "longitude": 27.3252
            },
            "location": "GOKOVA KORFEZI (AKDENIZ)",
            "depth": 8.5,
            "unix_timestamp": 1629467592,
            "datetime": "2021-08-20 16:53:12 GMT+0300",
            "revised": null,
            "id_hash": "c9efe10825e2639cef790768d26767dd",
            "hash": "d03a3d0b42f52a4b93e29db106fa57ed"
        },
        {
            "magnitude": 2.7,
            "coordinates": {
                "latitude": 39.5932,
                "longitude": 28.095
            },
            "location": "MAHMUDIYE-KEPSUT (BALIKESIR)",
            "depth": 7.5,
            "unix_timestamp": 1629466788,
            "datetime": "2021-08-20 16:39:48 GMT+0300",
            "revised": null,
            "id_hash": "a58f2c0c05b1211317533de203503142",
            "hash": "b27fe9a9198600c194c08e15c097d0ef"
        },
        "..."
    ]
}
```

## DATA SOURCE
[Boğaziçi Üniversitesi Kandilli Rasathanesi ve Deprem Araştırma Enstitüsü Bölgesel Deprem-Tsunami İzleme ve Değerlendirme Merkezi](http://www.koeri.boun.edu.tr/)