const Discord = require('discord.js');
const bot = new Discord.Client();
const footer = "Thanks For Reading"


module.exports = {
    name: 'embedrules',
    description: 'send Rules',
    execute(msg, args) {
        const Rules = new Discord.MessageEmbed()
            .setTitle('Rules')
            .setColor(0xf1c40f)
            .addField('1.', ("Dont be a Dick"))
            .addField('2.', ("Dont Ping The Mods or The Owner of The Server"))
            .addField('3.', ("if You Need Any Help Ask it in The 'Help' Channel"))
            .addField('4.', ("If an admin or a mod asked you to stop, do it and respect the decision"))
            .setFooter(footer)
            .setTimestamp(Date.now());
        msg.reply(Rules)
    }

}