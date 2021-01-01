const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kicks people',
    execute(msg, args) {
        if (msg.member.roles.cache.some(r => r.name === "lol") || (r => r.name === "boi")) {
            const user = msg.mentions.users.first();

            if (user) {
                const member = msg.guild.member(user);

                if (member) {
                    member.kick('you have been kicked').then(() => {
                        msg.channel.send(`sucessfully kicked ${user}`)

                    }).catch(error => {
                        msg.reply('i couldnt kick him');
                        console.log(error);
                    })
                } else {
                    msg.reply("that user isnt in the server")

                }

            } else {
                msg.reply('kick who ?');
            }
        } else {
            msg.reply("you dont have that permission")
        }

    }
}