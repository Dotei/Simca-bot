const Discord = require("discord.js");

const TOKEN = "NDM4MjkyNjgzODcwNTY4NDQ4.DcCfZQ.wJjozX0tXzb3xbSZ1bxh_rkyn_s"
const PREFIX ="!"
const botconfig = require("./botconfig.json");


var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});

bot.login('process.env.TOKEN');

bot.on("message", message => {
    if (message.content === "bonjour"){
        message.reply("Hey");

    }
    if (message.content === PREFIX + "serverinfo"){
    
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField("Nom du serveur", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Rejoin le", message.member.joinedAt)
        .addField("Nombre de membres", message.guild.memberCount);
    
        return message.channel.send(serverembed);
      }

    if (message.content === "ping"){  
        message.reply("Pong !");
        console.log('Ping Pong !');
    }
});
