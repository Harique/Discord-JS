const ms = require('ms');
const Discord = require('discord.js');



module.exports = {
    name: 'Mute',
    description: 'muts people',
    execute(msg, args) {
        if (msg.member.roles.cache.some(r => r.name === "Owner") || (r => r.name === "admins")) {
            var person = msg.guild.member(msg.mentions.users.first() || msg.guild.members(args[1]))

            if (!person) return msg.reply('i couldnt find the user');

            var mainrole = msg.guild.roles.cache.find(role => role.name === "Member");
            var muterole = msg.guild.roles.cache.find(role => role.name === "Muted");
            if (!muterole) return msg.reply('there is no mute role for me to use')

            var time = args[2]

            if (!args[2]) {
                return msg.reply('please tell me how mush time do i have to mute him for')
            }
            person.roles.remove(mainrole.id);
            person.roles.add(muterole.id);

            msg.channel.send(`${person.user} is muted for ${ms(ms(time))} :white_check_mark:`)

            setTimeout(function () {
                person.roles.add(mainrole.id);
                person.roles.remove(muterole);
                msg.channel.send(`${person.user} has been unmuted`)
            }, ms(time));


        };

    }
}