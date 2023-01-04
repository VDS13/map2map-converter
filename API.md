 API Reference

<a name="map2map"></a>

## map2map
map2map

**Kind**: global class  

* [map2map](#map2map)
    * [new map2map()](#new_map2map)
    * _instance_
        * [.identifyMap(url)](#map2map+identifyMap) ⇒ <code>String \| Number</code>
        * [.yandexMapsToCoord(url)](#map2map+yandexMapsToCoord) ⇒ <code>Promise</code>
        * [.googleMapsToCoord(url)](#map2map+googleMapsToCoord) ⇒ <code>Promise</code>
        * [.twoGisMapsToCoord(url)](#map2map+twoGisMapsToCoord) ⇒ <code>Promise</code>
        * [.appleMapsToCoord(url)](#map2map+appleMapsToCoord) ⇒ <code>Object</code>
        * [.telegramLocationToCoord(msg)](#map2map+telegramLocationToCoord) ⇒ <code>Object</code>
        * [.coordToYandexMaps(coord)](#map2map+coordToYandexMaps) ⇒ <code>String</code>
        * [.coordToTwoGisMaps(coord)](#map2map+coordToTwoGisMaps) ⇒ <code>String</code>
        * [.coordToGoogleMaps(coord)](#map2map+coordToGoogleMaps) ⇒ <code>String</code>
        * [.coordToAppleMaps(coord)](#map2map+coordToAppleMaps) ⇒ <code>String</code>
        * [.coordToTelegramLocation(coord, chat_id, bot, bot_type)](#map2map+coordToTelegramLocation)
### new map2map()

<a name="map2map+identifyMap"></a>

### map2map.identifyMap(url)
Specifies the type of geolocation link(google/yandex/2gis/apple).

**Kind**: instance method of [<code>map2map</code>](#map2map)  
**Returns**: <code>String \| Number</code> - If the geolocation link falls under one of the 4 types, returns the type, otherwise it will return -1.

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The geolocation link. |

<a name="map2map+yandexMapsToCoord"></a>

### map2map.yandexMapsToCoord(url) ⇒ <code>Promise</code>
Translates a link to a Yandex Maps geolocation into coordinates.

**Kind**: instance method of [<code>map2map</code>](#map2map)  
**Returns**: <code>Promise</code> - Returns a <code>Object</code>. This object has <code>lat</code> and <code>long</code> (latitude and longitude) properties. On error, properties are equal to `err`.
**Note**: Use no more than 1 time per second, otherwise captcha may work.

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The link to a Yandex Maps. |

<a name="map2map+googleMapsToCoord"></a>

### map2map.googleMapsToCoord(url) ⇒ <code>Promise</code>
Translates a link to a Google Maps geolocation into coordinates.

**Kind**: instance method of [<code>map2map</code>](#map2map)  
**Returns**: <code>Promise</code> - Returns a <code>Object</code>. This object has <code>lat</code> and <code>long</code> (latitude and longitude) properties. On error, properties are equal to `err`.
**Note**: Use no more than 1 time per second, otherwise captcha may work.

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The link to a Google Maps. |

<a name="map2map+twoGisMapsToCoord"></a>

### map2map.twoGisMapsToCoord(url) ⇒ <code>Promise</code>
Translates a link to a 2Gis Maps geolocation into coordinates.

**Kind**: instance method of [<code>map2map</code>](#map2map)  
**Returns**: <code>Promise</code> - Returns a <code>Object</code>. This object has <code>lat</code> and <code>long</code> (latitude and longitude) properties. On error, properties are equal to `err`.

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The link to a 2Gis Maps. |

<a name="map2map+coordToAppleMaps"></a>

### map2map.coordToAppleMaps(url) ⇒ <code>Object</code>
Translates a link to a Apple Maps geolocation into coordinates.

**Kind**: instance method of [<code>map2map</code>](#map2map)  
**Returns**: <code>Object</code>. This object has <code>lat</code> and <code>long</code> (latitude and longitude) properties. On error, properties are equal to `err`.

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The link to a Apple Maps. |

<a name="map2map+telegramLocationToCoord"></a>

### map2map.telegramLocationToCoord(msg) ⇒ <code>Object</code>
Translates a Telegram location into coordinates.

**Kind**: instance method of [<code>map2map</code>](#map2map)  
**Returns**: <code>Object</code>. This object has <code>lat</code> and <code>long</code> (latitude and longitude) properties. On error, properties are equal to `err`.

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>Object</code> | https://core.telegram.org/bots/api#message |

<a name="map2map+coordToYandexMaps"></a>

### map2map.coordToYandexMaps(coord) ⇒ <code>String</code>
Translates coordinates into a link to a Yandex Maps.

**Kind**: instance method of [<code>map2map</code>](#map2map)  
**Returns**: <code>String</code>. The link to a Yandex Maps.

| Param | Type | Description |
| --- | --- | --- |
| coord | <code>Object</code> | <code>lat</code> and <code>long</code> (latitude and longitude) properties |

<a name="map2map+coordToTwoGisMaps"></a>

### map2map.coordToTwoGisMaps(coord) ⇒ <code>String</code>
Translates coordinates into a link to a 2Gis Maps.

**Kind**: instance method of [<code>map2map</code>](#map2map)  
**Returns**: <code>String</code>. The link to a 2Gis Maps.

| Param | Type | Description |
| --- | --- | --- |
| coord | <code>Object</code> | <code>lat</code> and <code>long</code> (latitude and longitude) properties |

<a name="map2map+coordToGoogleMaps"></a>

### map2map.coordToGoogleMaps(coord) ⇒ <code>String</code>
Translates coordinates into a link to a Google Maps.

**Kind**: instance method of [<code>map2map</code>](#map2map)  
**Returns**: <code>String</code>. The link to a Google Maps.

| Param | Type | Description |
| --- | --- | --- |
| coord | <code>Object</code> | <code>lat</code> and <code>long</code> (latitude and longitude) properties |

<a name="map2map+coordToAppleMaps"></a>

### map2map.coordToAppleMaps(coord) ⇒ <code>String</code>
Translates coordinates into a link to a Apple Maps.

**Kind**: instance method of [<code>map2map</code>](#map2map)  
**Returns**: <code>String</code>. The link to a Apple Maps.

| Param | Type | Description |
| --- | --- | --- |
| coord | <code>Object</code> | <code>lat</code> and <code>long</code> (latitude and longitude) properties |

<a name="map2map+coordToTelegramLocation"></a>

### map2map.coordToTelegramLocation(coord, chat_id, bot, bot_type) ⇒ <code>String</code>
Translates coordinates into a Telegram location.

**Kind**: instance method of [<code>map2map</code>](#map2map)  
**Returns**: <code>String</code>. The link to a Apple Maps.

| Param | Type | Description |
| --- | --- | --- |
| coord | <code>Object</code> | <code>lat</code> and <code>long</code> (latitude and longitude) properties |
| chat_id | <code>String</code> | Unique identifier for this Telegram chat |
| bot | <code>TelegramBot</code> | TelegramBot class instance (Telegraf/Telebot/node-telegram-bot-api) |
| bot_type | <code>String</code> | Telegram bot library. |