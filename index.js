const fetch = require('node-fetch')
const encoder = require('turkish-char-encoding');
const md5 = require('md5');
const dateFormat = require("dateformat");
var url
var apiRoot = {}
var earthquakeArray = []

module.exports = function getData() {
    url = 'http://www.koeri.boun.edu.tr/scripts/lst' + getRandomInt(10, 3) + '.asp'
    return fetch(url)
        .then(html => html.buffer())
        .then(html => {
            apiRoot["source_url"] = url
            apiRoot["result"] = []
            earthquakeArray = []
            earthquakeArray = encoder('win-1254').toUTF8(html).split(/\r?\n/)
            var preStartIndex = earthquakeArray.indexOf("<pre>");
            var preEndIndex = earthquakeArray.indexOf("</pre>");
            earthquakeArray = earthquakeArray.slice(preStartIndex + 7, preEndIndex - 1);
            earthquakeArray.forEach(element => {
                var data = {
                    "magnitude": getMagnitude(element),
                    "coordinates": {
                        "latitude": getLat(element),
                        "longitude": getLong(element)
                    },
                    "location": getLocation(element),
                    "depth": getDepth(element),
                    "unix_timestamp": getUnixTimestamp(element),
                    "datetime": dateFormat(getDateTime(element), "yyyy-mm-dd HH:MM:ss Zo"),
                    "revised": getRevised(element),
                    "id_hash": md5(getLat(element) + "," + getLong(element)),
                    "hash": md5(getMagnitude(element) + "," + getLat(element) + "," + getLong(element) + "," + getDepth(element) + "," + getUnixTimestamp(element) + "," + getLocation(element))
                }
                apiRoot["result"].push(data)
            })
            return apiRoot
        })
        .catch()
}

function getRandomInt(max, ...without) {
    var random;
    do {
        random = Math.floor(Math.random() * max);
    } while (without.indexOf(random) !== -1);
    return random;
}

function getUnixTimestamp(data) {
    return getDateTime(data).getTime() / 1000;
}

function getMagnitude(data) {
    var MD = data.slice(55, 58);
    var ML = data.slice(60, 63);
    var MW = data.slice(65, 68);
    if (MW == '-.-') {
        if (ML == '-.-') {
            if (MD == '-.-') {
                return parseFloat(0)
            } else {
                return parseFloat(MD)
            }
        } else {
            return parseFloat(ML)
        }
    } else {
        return parseFloat(MW)
    }
}

function getLat(data) {
    var lat = parseFloat(data.slice(21, 28));
    return lat;
}

function getLong(data) {
    var long = parseFloat(data.slice(31, 38));
    return long;
}

function getDepth(data) {
    var depth = parseFloat(data.slice(41, 49).replace(/ /gi, ''));
    return depth;
}

function getLocation(data) {
    var location = data.slice(71, 121).trim();
    return location;
}

function getDateTime(data) {
    var date = new Date(
        Date.UTC(
            data.slice(0, 4),
            data.slice(5, 7) - 1,
            data.slice(8, 10),
            data.slice(11, 13),
            data.slice(14, 16),
            data.slice(17, 19)
        )
    );
    date.setHours(date.getHours() - 3);
    return date;
}

function getRevised(data) {
    var revised = data.slice(121, data.length).trim();

    if (revised == "İlksel") {
        return null;
    } else {
        var dateData = revised.slice(12, revised.length - 1);
        var date = new Date(
            Date.UTC(
                dateData.slice(0, 4),
                dateData.slice(5, 7) - 1,
                dateData.slice(8, 10),
                dateData.slice(11, 13),
                dateData.slice(14, 16),
                dateData.slice(17, 19)
            )
        );
        date.setHours(date.getHours() - 3);

        return {
            "number": revised.slice(7, 8),
            "unix_timestamp": date.getTime() / 1000,
            "datetime": dateFormat(date, "yyyy-mm-dd HH:MM:ss Zo"),
        };
    }
}