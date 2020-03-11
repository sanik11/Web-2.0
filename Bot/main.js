const TeleBot = require('telebot');
const but = {
    hello: {
        label: '👋 Hello',
        command: '/hello'
    },
    time: {
        label: '⌚ Time',
        command: '/time'
    }
};

const bot = new TeleBot({
    token: '980588958:AAFnIyiwZANgK_Yh5I5HvD68S4L6gC5obAI',
    usePlugins: ['namedButtons'],
    pluginConfig: {
        namedButtons: {
            buttons: but
        }
    }
});


bot.on('/start', (msg) => {
    let markup = bot.keyboard([
        [but.hello.label, but.time.label],
    ], { resize: true });

    return bot.sendMessage(msg.from.id, '', { markup });
});

bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
});

bot.on('/time', (msg) => {
    t = new Date().toTimeString();
    return bot.sendMessage(msg.from.id, `Current time: ${ t }`);
});

bot.start();