const {Telegraf} = require('telegraf');
const map2map = require('map2map-converter');
const TOKEN = 'token';

const bot = new Telegraf(TOKEN);
const maps = new map2map();

//'node-telegram-bot-api'
/*
process.env.NTBA_FIX_319 = 1;
bot.onText(/\/start/, (msg) => {
    maps.coordToTelegramLocation({lat: 50.321, long: 50.123}, msg.chat.id, bot, 'node-telegram-bot-api');
});

bot.on("location", (msg) => {
    bot.sendMessage(msg.chat.id ,maps.coordToYandexMaps(maps.telegramLocationToCoord(msg)));
});*/



//'telebot'
/*
bot.on('/start', (msg) => {
    maps.coordToTelegramLocation({lat: 50.321, long: 50.123}, msg.chat.id, bot, 'telebot');
});

bot.on("location", (msg) => {
    bot.sendMessage(msg.chat.id ,maps.coordToYandexMaps(maps.telegramLocationToCoord(msg)));
});
bot.connect();
*/



//'telegraf'
/*
bot.start((ctx) => maps.coordToTelegramLocation({lat: 50.321, long: 50.123}, ctx.message.chat.id, bot, 'telegraf'));

bot.on("location", (ctx) => {
    bot.telegram.sendMessage(ctx.message.chat.id ,maps.coordToYandexMaps(maps.telegramLocationToCoord(ctx.message)));
});
bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
*/