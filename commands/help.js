const Discord = require('discord.js');
const {
    Client,
    MessageAttachment
} = require('discord.js');
const footer = "Thanks For Reading"
var Version = '1.0';

module.exports = {
    name: 'help',
    description: '',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Bot Commands!')
            .addField("Command 1", "**Kick**\n Used by the Admins to Kick Members Out of the Server")
            .addField("Command 2", "**Ban**\n Used by the Admins to Ban Members Out of the Server")
            .addField("Command 3", "**Mute**\n Used by the Admins to Mute Users for certain amount of Time")
            .addField("Command 4", "**Play**\n This command Allows The Bot to Join your Voice Chat and Plays anything like Youtube videos")
            .addField("Command 5", "**Stop**\n Stops whatever the bot is playing in the voice chat")
            .addField("Command 6", "**skip**\n Skips to the next video in the Queue")
            .addField("Command 7", "**Leave**\n Disconnects the bot from the vc if hes in one")
            .addField("Command 8", "**Rules**\n Sends A list of Rules of the Server ")
            .addField("Command 9", "**Clear**\n Clears the Certain Channel's Messages that are up to 14 Days old But you Need to give it the amount of messages it needs to clear")
            .addField("Command 10", "**Say**\n Repeats What you say after the command")
            .addField("Command 11", "**Ryo**\n Just to Fuck With him")
            .addField("Description", "i will be adding commands in the future if needed to")
            .addField("Developer", "Harique")
            .setColor(0xf1c40f)
            .addField('Bots Version', Version)
            .setFooter("Have fun!")
            .setTimestamp(Date.now())
        msg.channel.send(embed)
    }
}