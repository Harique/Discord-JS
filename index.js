const {
    Client,
    MessageAttachment
} = require('discord.js');

const ytdl = require('ytdl-core');

const Discord = require('discord.js');

const ms = require('ms');

const fs = require('fs');

const {
    error
} = require('console');

const bot = new Discord.Client();

const footer = "Thanks For Reading"

const PREFIX = '*';

var Version = '1.0';

var servers = {};

bot.commands = new Discord.Collection();

const config = require('./config.json');
const { type } = require('os');

//Command handler code 

const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandfiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

//turning on the bot

bot.on('ready', () => {
    console.log("working")
    bot.user.setActivity('oi m8', {
        type: 'STREAMING'
    }).catch(console.error)
})

//greeting code

bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.cache.find(channel => channel.name === "welco");
    if (!channel) return;
    channel.send(`Welcome to my Server,${member}, Please Have Fun`)
    var memberrule = member.guild.roles.cache.find(role => role.name === "Owner");
    if (!memberrule) return msg.reply('there is no mute role for me to use')
    member.roles.add(memberrule.id);
})

//bots commands only a certain channel

bot.on('message', msg => {
    const {
        guild,
        content,
        channel
    } = msg
    if (msg.author.bot) {
        return;
    }
    const commandchannel = guild.channels.cache.find(channel => channel.name === "bot-commands")
    if (!commandchannel) return;
    if (channel.name !== "bot-commands") {
        console.log("test")
        if (content.startsWith(PREFIX)) {
            console.log("works to")
            channel.send(`Please use bot commands in <#${commandchannel.id}>.`);
            msg.delete()
            return;
        }
    }


    if (msg.content.startsWith(PREFIX) == false) return

    let args = msg.content.substring(PREFIX.length).split(" ");



    switch (args[0]) {

        //Manulle Commands  

        case 'tit':
            bot.commands.get('tit').execute(msg, args);

            break;

        case 'ping':

            msg.channel.send("```fix\n" + `Name =  ${msg.guild.name}.\nMembers = ${msg.guild.memberCount}\n` + "```")

            break;


        case 'website':
            msg.reply('https://www.youtube.com/user/azouhakim2004');
            break;


        case 'info':
            if (args[1] === 'author') {
                msg.reply('it is Hariques work')

            } else {
                msg.reply('what info do you want to know?')
            }
            break;


        case 'version':
            msg.channel.send("this version of the bot is " + Version);
            break;


        case 'clear':
            if (msg.member.hasPermission('MANAGE_MESSAGES')) {
                if (!args[1]) {
                    return msg.reply('please define how many i need to clear');
                }
                msg.channel.bulkDelete(args[1]);
            } else {
                msg.reply("you don't have the permission to clear the chat")
            }
            break;


        case 'help':
            bot.commands.get('help').execute(msg, args);
            break;


        case 'hatsu':
            if (msg.member.roles.cache.some(r => r.name === "actual gangsta") || (r => r.name === "brain damaged")) {
                const Attachements = new MessageAttachment('https://static-cdn.jtvnw.net/jtv_user_pictures/988e306e-a4f5-44c0-9685-69cab4a8e7ae-profile_image-70x70.jpg')
                msg.channel.send(msg.author, Attachements)
            }

            break;


        case 'rules':
            bot.commands.get('embedrules').execute(msg, args);
            break;


        case 'kick':

            bot.commands.get('kick').execute(msg, args);
            break;

        case 'ban':
            bot.commands.get('ban').execute(msg, args);
            break;
        case 'play':

            function play(connection, msg) {

                var server = servers[msg.guild.id];

                server.dispatcher = connection.play(ytdl(server.queue[0], {
                    filter: "audioonly"
                }));

                server.queue.shift();

                server.dispatcher.on("end", function () {
                    if (server.queue[0]) {
                        play(connection, msg);
                    } else {
                        connection.disconnect();
                    }
                });
            }

            if (!args[1]) {
                msg.reply('please provide a link');
                return;
            }
            if (!msg.member.voice.channel) {
                msg.reply("Join a voice channel to play music!");
                return;
            }

            if (!servers[msg.guild.id]) servers[msg.guild.id] = {
                queue: []
            }

            var server = servers[msg.guild.id];

            server.queue.push(args[1]);

            const voiceChannel = msg.member.voice.channel;
            if (voiceChannel) {
                voiceChannel.join().then(function (connection) {
                    play(connection, msg);
                }).catch(err => console.error(err));
            }

            break;

        case 'skip':
            var server = servers[msg.guild.id];
            if (server.dispatcher) server.dispatcher.end();
            msg.channel.send("skiped the song")

            break;

        case 'stop':
            var server = servers[msg.guild.id];
            if (msg.guild.voice.connection) {
                for (var i = server.queue.length - 1; i >= 0; i--) {
                    server.queue.splice(i, 1);
                }
                server.dispatcher.end();
                msg.channel.send("stoped the queue")
                console.log('stopped the queue')
            }
            if (msg.guild.connection) msg.guild.voice.connection.disconnect();

            break;
        case 'leave':
            var server = servers[msg.guild.id];
            if (server.dispatcher) server.dispatcher.end(); {
                msg.guild.voice.connection.disconnect();
            }

            break;
        case 'mute':
            bot.commands.get('Mute').execute(msg, args);
            break;
        case 'say':
            if (!args[1]) return msg.reply("plz give what i should say")
            msg.channel.send(msg.content.slice(4))
            break;
        case 'nickname':
            const us = msg.mentions.users.first();
            if (us) {
                const me = msg.guild.member(us);
                if (me) {
                    const nickname = args[2];
                    me.setNickname(nickname, [""])
                    msg.channel.send(`${me} you're nickname has been changed to ${nickname}`)

                }
            }
            break;
        case 'CC':
            voiceChannel.clone(options = {}); {
                
                Util.mergeDefault(
                  {
                    name: args[1],
                    type: voice,
                    userLimit: args[2] 
                  },
                  options,
                );
                return this.guild.channels.create(options.name, options);
            }
            
            break;

    }
});

//bot's login
bot.login(config.Token);