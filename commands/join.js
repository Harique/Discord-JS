module.exports = {
    name: 'join',
    description: '',
    execute(msg, args){
        const voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) {
            return msg.reply('you are not in a voice channel.');
        } else {
            voiceChannel.join().then(() =>{
                msg.reply("i have joined the voice channel")
            })
            
        }
    }
}