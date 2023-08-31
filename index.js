const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
const bot = new TelegramBot(process.env.TOKEN, {polling: true})
const brand = require('./brandsSort')

bot.setMyCommands( [
    {command: '/start', description: 'Навигация'},
    {command: '/menu', description: 'Вызвать меню'}
])

const bazeMenu =  { 
    reply_markup: {
        keyboard: [
            ['Сортировка по бренду'],
        ],
        resize_keyboard: true
    }
}

bot.on('message', async msg => {

    const chatId = msg.chat.id

    if(msg.text == '/start'){
        await bot.sendMessage(chatId, 'Навигация по каналу: @internetlog')
    }


    if(msg.text === '/menu') {
        await bot.sendMessage(chatId, `Меню бота`, bazeMenu)
    }

    if(msg.text == 'Сортировка по бренду') {
        await bot.sendMessage(chatId, 'Бренды: ', { 
            reply_markup: {
                keyboard: brands,
                resize_keyboard: true
            }
        })
    }

    if(msg.text == 'Aphex Twin - 5шт'){
        await bot.sendMessage(chatId, 'https://t.me/internetlog/66')
        await bot.sendMessage(chatId, 'https://t.me/internetlog/63')
        await bot.sendMessage(chatId, 'https://t.me/internetlog/29')
        await bot.sendMessage(chatId, 'https://t.me/internetlog/5')
        await bot.sendMessage(chatId, 'https://t.me/internetlog/3')
    }

    if(msg.text == 'MMY - 1шт'){
        await bot.sendMessage(chatId, 'https://t.me/internetlog/24')
    }

    if(msg.text == 'Drain Gang - 2шт'){
        await bot.sendMessage(chatId, 'https://t.me/internetlog/74')
        await bot.sendMessage(chatId, 'https://t.me/internetlog/38')
    }

    if(msg.text == 'Thaiboy Digital - 1шт'){
        await bot.sendMessage(chatId, 'https://t.me/internetlog/72')
    }

    if(msg.text == 'MAISON MARGIELA - 1шт'){
        await bot.sendMessage(chatId, 'https://t.me/internetlog/53')
    }

    if(msg.text == 'Goth Money Records - 2шт'){
        await bot.sendMessage(chatId, 'https://t.me/internetlog/70')
        await bot.sendMessage(chatId, 'https://t.me/internetlog/68')
    }

    if(msg.text == '2Famous - 1шт'){
        await bot.sendMessage(chatId, 'https://t.me/internetlog/78')
    }

    if(msg.text == 'VETEMENTS - 1шт'){
        await bot.sendMessage(chatId, 'https://t.me/internetlog/84')
    }

    if(msg.text == 'Balenciaga - 1шт'){
        await bot.sendMessage(chatId, 'https://t.me/internetlog/92')
    }

    if(msg.text == 'Обратно в меню') {
        await bot.sendMessage(chatId, `Меню бота: `, bazeMenu)
    }
})