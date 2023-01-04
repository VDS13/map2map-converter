const axios = require('axios');
const cheerio = require('cheerio');

module.exports = class map2map {
    identifyMap(url) {
        if ((url.indexOf('goo.gl') !== -1 || url.indexOf('google') !== -1) && url.indexOf('map') !== -1) {
            return 'google';
        } else if (url.indexOf('yandex') !== -1 && url.indexOf('map') !== -1) {
            return 'yandex';
        } else if (url.indexOf('apple') !== -1 && url.indexOf('map') !== -1) {
            return 'apple';
        } else if (url.indexOf('2gis') !== -1) {
            return '2gis';
        }
        return -1;
    }
    async yandexMapsToCoord(url) {
        let response = await axios({
            method: 'GET',
            url: url,
            headers:{
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "ru",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
                "Cookie": '',
                "DNT": "1",
                "Host": "yandex.ru",
                "Pragma": "no-cache",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36",
                "X-Requested-With": "XMLHttpRequest",
            }
        });
        if (url.indexOf('maps/-/') !== -1) {
            const $ = cheerio.load(response.data);
            const res = $("div.toponym-card-title-view__coords-badge").text().split(', ');
            if (res[1] !== undefined)
                return {lat: res[0], long: res[1]};
        }  else if (url.indexOf('maps/org/') !== -1) {
            const res = response.data.match(/displayCoordinates\":\[(.(-?)[0-9]{1,15})(.(-?)[0-9]{1,15})+/)[0].substr(21).split(',');
            if (res[1] !== undefined)
                return {lat: res[1], long: res[0]};
        }
        return {lat: 'err', long: 'err'};
    }
    async googleMapsToCoord(url) {
        let response = await axios.get(url);
        const res = response.data.match(/APP_INITIALIZATION_STATE=\[\[\[((-?)[0-9][0-9]*)(.(-?)[0-9]{1,15})+/)[0].substr(28).split(',');
        if (res[1] !== undefined)
            return {lat: res[2], long: res[1]};
        return {lat: 'err', long: 'err'};
    }
    async twoGisMapsToCoord(url) {
        let response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const res = new URL($("input[name=return_url]").val()).pathname.split('/').slice(-1)[0].split('%2C');
        return {lat: res[1], long: res[0]};
    }
    appleMapsToCoord(url) {
        const res = new URL(url).searchParams.get('ll').split(',');
        return {lat: res[0], long: res[1]};
    }
    telegramLocationToCoord(msg) {
        return {lat: msg.location.latitude, long: msg.location.longitude};
    }
    coordToYandexMaps(coord) {
        return 'https://yandex.ru/maps/?ll=' + coord.long + '%2C' + coord.lat + '&mode=whatshere&whatshere%5Bpoint%5D=' + coord.long + '%2C' + coord.lat + '&whatshere%5Bzoom%5D=18&z=18';
    }
    coordToTwoGisMaps(coord) {
        return 'https://2gis.ru/geo/' + coord.long + '%2C' + coord.lat;
    }
    coordToGoogleMaps(coord) {
        return 'https://maps.google.com/?q=' + coord.lat + ',' + coord.long;
    }
    coordToAppleMaps(coord) {
        return 'https://maps.apple.com/place?ll=' + coord.lat + '%2C' + coord.long;
    }
    coordToTelegramLocation(coord, chat_id, bot, bot_type) {
        if (bot_type === 'node-telegram-bot-api') {
            bot.sendLocation(chat_id, coord.lat, coord.long);
        } else if (bot_type === 'telegraf') {
            bot.telegram.sendLocation(chat_id, coord.lat, coord.long);
        } else if (bot_type === 'telebot') {
            bot.sendLocation(chat_id, [coord.lat, coord.long]);
        }
    }
}