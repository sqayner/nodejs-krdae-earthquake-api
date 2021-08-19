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
    "result": [
        {
            magnitude: 1.9,
            coordinates: { 
                    latitude: 36.4473, 
                    longitude: 27.043 
                },
            location: 'ONIKI ADALAR (AKDENIZ)',
            depth: 5,
            unix_timestamp: 1629400027,
            datetime: '2021-08-19T22:07:07+0300',
            hash: 'faadfb3d546d8410722681141b008e11',
            hash2: 'c69e610a80696ec3561cb1f580b62e13'
        },
        {
            magnitude: 2.5,
            coordinates: { 
                    latitude: 36.427, 
                    longitude: 27.0287
                },
            location: 'AKDENIZ',
            depth: 8,
            unix_timestamp: 1629398345,
            datetime: '2021-08-19T21:39:05+0300',
            hash: '765ef98d7484672df8645c860bd6b879',
            hash2: 'b8e394b9a82c34fa33fcf2382ad535c3'
        },
        ...
    ]
}
```

## DATA SOURCE
[Boğaziçi Üniversitesi Kandilli Rasathanesi ve Deprem Araştırma Enstitüsü Bölgesel Deprem-Tsunami İzleme ve Değerlendirme Merkezi](http://www.koeri.boun.edu.tr/)