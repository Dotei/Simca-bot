const Discord = require("discord.js");
const PREFIX ="!"
const botconfig = require("./botconfig.json");
var bot = new Discord.Client();
var resultOpts = ["Result", "Exact result", "Decimal approximation"];
var WolframLib = require('node-wolfram');
var Wolfram = new WolframLib(config.wolfram.JYGATT-QPHQGVL8XP);

bot.login(process.env.TOKEN);


bot.on("ready", function() {
    console.log("Ready");
})
    
bot.on("message", (message) => {
        if (message.content === "bonjour"){
        message.reply("Hey");

  }
       
      
        if (message.content === PREFIX + "info"){  
        message.reply("```Je suis toujours en développement, coder par Dotei ! ```");
        console.log('info bot !');
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
	
    

     if (message.content === PREFIX + "botinfo"){
     
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Information du bot")
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("Nom du bot", bot.user.username)
        .addField("Crée le", bot.user.createdAt);
    
        return message.channel.send(botembed);
      }
	
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split (" ")

    switch (args[0]) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "cry":
            var embed = new Discord.RichEmbed()
                .setTitle(`${message.author.tag} is sad`)
                .setImage("https://cdn.weeb.sh/images/ryVBX8mw-.gif")
            message.channel.sendEmbed(embed);
            break;
         case "punch":
            var embed = new Discord.RichEmbed()
                .setTitle(`Simca punches ${message.author.tag} `)
                .setImage("http://imgur.com/6wKJVHy.gif")
            message.channel.sendEmbed(embed);
            break;
            case "hug":
                var embed = new Discord.RichEmbed()
                    .setTitle(`Simca hugs ${message.author.tag} `)
                    .setImage("http://i.imgur.com/SUdqF9w.gif")
                message.channel.sendEmbed(embed);
            break;        
    }  
	    if (message.content === PREFIX + "flip") {
    	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		bot.reply(message, "The coin landed on heads");
    	} else if (result == 2) {
    		bot.reply(message, "The coin landed on tails");
    	}
    }
     
});
