const Discord = require("discord.js");
var bot = new Discord.Client();
bot.login(process.env.TOKEN);
var prefix = ("!");

bot.on('message', message => {

    if(message.content === prefix + "infodiscord") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information du Discord")
        .addField("Nom du discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Utilisateurs sur le discord", message.guild.memberCount)
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)

    }

    if (message.content.startsWitch(PREFIX + "sondage")) {
        if(message.author.id == "238937155680993281"){ 
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
            .setDescription("Sondage")
            .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
            .setColor("0xB40404")
            .setTimestamp()
        message.guild.channels.find("name", "sondage"). sendEmbed(embed)
        .then(function (message) { 
            message.react("✅")
            message.react("✕")
        }).catch(function() { 
        });
        }else{ 
            return message.reply("tu n'as pas la permission.")
}}})
