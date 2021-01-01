const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    description: 'bans people',
    execute(msg, args) {
        if (msg.member.roles.cache.some(r => r.name === "Owner") || (r => r.name === "admins")) {
            const dumb = msg.mentions.users.first();

            if (dumb) {
                const membr = msg.guild.member(dumb);

                if (membr) {
                    membr.ban('Reason: Violated The Rules').then(() => {
                        msg.channel.send(`${dumb} Has Been Banned`)
                    })
                } else {
                    msg.reply("i couldnt find him")
                }
            } else {
                msg.reply("i couldnt find him")
            }
        }

    }

}