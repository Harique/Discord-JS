const Discord = require('discord.js');


module.exports = {
    name: 'tit',
    description: 'replies to tit',
    execute(msg, args) {
        if (msg.member.roles.cache.some(r => r.name === "MrCc") || (r => r.name === "Owner")) {
            const use = msg.mentions.users.first();
            if (use) {
                const mem = msg.guild.member(use);
                if (mem) {
                    msg.channel.send(`${use} is tit :)`)
                } else {
                    msg.reply("i couldnt find him")
                }
            } else {
                msg.reply('i couldnt find him')
            }
        } else {
            msg.reply('you dont have permission to use this command')
        }
    }
}