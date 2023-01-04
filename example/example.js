const http = require('http');
const map2map = require('map2map-converter');
const hostname = '127.0.0.1';
const port = 3000;
const axios = require('axios');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
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
});
