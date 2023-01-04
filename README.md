<h1 align="center">🗺 map2map-converter 🗺</h1>

<div align="center">

Converter of links to geolocation into coordinates and vice versa without using API services.

[![npm package](https://img.shields.io/npm/v/map2map-converter?logo=npm&style=flat-square)](https://www.npmjs.org/package/map2map-converter)
[![npm download](https://img.shields.io/npm/dm/map2map-converter)](https://www.npmjs.org/package/map2map-converter)
[![https://t.me/vds_13](https://img.shields.io/badge/💬%20Telegram-VDS13-blue.svg?style=flat-square)](https://t.me/vds_13)

</div>

## 📙 Description

The library will help you get the coordinates from the URL without using the API services.

Supported web mapping platforms:
* Yandex
* Google
* 2Gis
* Apple

Supported Telegram bot libraries:
* [Telegraf](https://github.com/telegraf/telegraf)
* [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
* [telebot](https://github.com/mullwar/telebot)

## 📦 Install

```sh
npm i map2map-converter
```
## [🎚️ Changelog](https://github.com/VDS13/map2map-converter/blob/main/CHANGELOG.md)

## [🗺 API](https://github.com/VDS13/map2map-converter/blob/main/API.md)

## 🚀 Usage

### Example 1:
```js
    const map2map = require('map2map-converter');
    maps = new map2map();
    maps.twoGisMapsToCoord('https://go.2gis.com/7muvw').then((response) => console.log('twoGisMapsToCoord: ' + response.lat + ' ' + response.long));
    maps.yandexMapsToCoord('https://yandex.ru/maps/org/187589077176').then((response) => console.log('yandexMapsToCoord: ' + response.lat + ' ' + response.long));
    maps.googleMapsToCoord('https://maps.app.goo.gl/ijGhmJi4HtQAhE5h8?g_st=it').then((response) => console.log('googleMapsToCoord: ' + response.lat + ' ' + response.long));
    const apple = maps.appleMapsToCoord('https://maps.apple.com/?address=London,%20SW1A%200AA,%20England&auid=8156900488245778404&ll=51.500687,-0.124561&lsp=9902&q=Big%20Ben&_ext=Cj4KBQgEEOEBCgQIBRADCgQIBhBzCgQIChAOCgQIEBABCgQILxBmCgQIUhAFCgQIVRAOCgQIWRAGCgUIpAEQARIkKcCy0qQUwElAMc0uzs5Y6r+/Od7U9mUfwElAQS+175sM2L+/&t=m')
    console.log('coordToYandexMaps: ' + maps.coordToYandexMaps({lat: 50.321, long: 50.123}));
    console.log('coordToGoogleMaps: ' + maps.coordToGoogleMaps({lat: 50.321, long: 50.123}));
    console.log('coordToAppleMaps: ' + maps.coordToAppleMaps({lat: 50.321, long: 50.123}));
    console.log('coordToTwoGisMaps: ' + maps.coordToTwoGisMaps({lat: 50.321, long: 50.123}));
    console.log('identifyMap(google): ' + maps.identifyMap('https://maps.app.goo.gl/sbxrbSUjsfcgU7CG8?g_st=it'));
    console.log('identifyMap(yandex): ' + maps.identifyMap('https://yandex.ru/maps/-/CCUri0hzlC'));
    console.log('identifyMap(2gis): ' + maps.identifyMap('https://go.2gis.com/7muvw'));
    console.log('identifyMap(apple): ' + maps.identifyMap('https://maps.apple.com/?address=London,%20SW1A%200AA,%20England&auid=8156900488245778404&ll=51.500687,-0.124561&lsp=9902&q=Big%20Ben&_ext=Cj4KBQgEEOEBCgQIBRADCgQIBhBzCgQIChAOCgQIEBABCgQILxBmCgQIUhAFCgQIVRAOCgQIWRAGCgUIpAEQARIkKcCy0qQUwElAMc0uzs5Y6r+/Od7U9mUfwElAQS+175sM2L+/&t=m'));
    console.log('appleMapsToCoord: ' + apple.lat + ' ' + apple.long);
```
### Result 1:

<img src="https://github.com/VDS13/map2map-converter/blob/main/doc/example1.jpg"/>

### Example 2:
```js
    const {Telegraf} = require('telegraf');
    const map2map = require('map2map-converter');
    const TOKEN = 'token';

    const bot = new Telegraf(TOKEN);
    const maps = new map2map();

    bot.start((ctx) => maps.coordToTelegramLocation({lat: 50.321, long: 50.123}, ctx.message.chat.id, bot, 'telegraf'));

    bot.on("location", (ctx) => {
        bot.telegram.sendMessage(ctx.message.chat.id ,maps.coordToYandexMaps(maps.telegramLocationToCoord(ctx.message)));
    });
    bot.launch();
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
```
### Result 2:

<img src="https://github.com/VDS13/map2map-converter/blob/main/doc/example2.jpg"/>

## License

**The MIT License (MIT)**

Copyright © 2022-2023 Dmitry Vyazin