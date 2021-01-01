module.exports = {
    name: 'ping',
    description: 'says ping!',
    execute(msg, args){
        msg.channel.send("```fix\n" + `Name =  ${msg.guild.name}.\nMembers = ${msg.guild.memberCount}\n` + "```")
    }
}
