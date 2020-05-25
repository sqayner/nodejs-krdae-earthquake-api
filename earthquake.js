const rp = require('request-promise')
var url = 'http://www.koeri.boun.edu.tr/scripts/lst7.asp'
var apiRoot = {}
var result = 'result'
apiRoot[result] = []
var earthquakeArray = []

module.exports = function getData() {
    return rp(url)
        .then(html => {
            apiRoot[result] = []
            earthquakeArray = []
            earthquakeArray = html.split(/\r?\n/)
            earthquakeArray.splice(0, 98)
            earthquakeArray.splice(
                earthquakeArray.length - 32,
                earthquakeArray.length
            )
            earthquakeArray.forEach(element => {
                var data = {
                    magnitude: getMagnitude(element),
                    latitude: getLat(element),
                    longitude: getLong(element),
                    location: getLocation(element),
                    depth: getDepth(element),
                    timestamp: getTimestamp(element),
                    time: getTime(element)
                }
                apiRoot[result].push(data)
            })
            return apiRoot
        })
        .catch()
}

function getTimestamp(data) {
    var datum = new Date(
        Date.UTC(
            data.slice(0, 4),
            data.slice(5, 7) - 1,
            data.slice(8, 10),
            data.slice(11, 13),
            data.slice(14, 16),
            data.slice(17, 19)
        )
    )
    return datum.getTime() / 1000
}

function getMagnitude(data) {
    var ML = data.slice(60, 63)
    var MW = data.slice(65, 68)
    if (MW == '-.-') return ML
    else return MW
}

function getLat(data) {
    var lat = data.slice(21, 28)
    return lat
}

function getLong(data) {
    var long = data.slice(31, 38)
    return long
}

function getDepth(data) {
    var depth = data.slice(41, 49).replace(/ /gi, '')
    return depth
}

function getLocation(data) {
    var location = data.slice(71, 121).replace(/ /gi, '')
    return location
}

function getTime(data) {
    var time = data.slice(0, 19).replace(/ /gi, '')
    return time
}