const Discord = require("discord.js");
const bot = new Discord.Client();
  
var prefix = ("!")


bot.on("ready", function() {
    bot.user.setGame("Command: !help");
    console.log("connected");
});

bot.on("message", message => {
    if (message.content === prefix + "help"){  
        message.channel.sendMessage("Liste des commandes: \n -!help");
    }

    if (message.content === "ping"){  
        message.reply("Pong !");
        console.log('Ping Pong!');
    }   
        if (message.content === prefix + "info"){  
        message.reply("J'ai été coder par Dotei !");
        console.log('info bot !');
    }
        if (message.content === "ching"){  
        message.reply("Chang!");
        console.log('Ching Chang!');
    }
  
});  

bot.on("message", function(message){
    if (message.author.equals(bot.user)) return;

    if (message.content == "bonjour"){
        message.channel.sendMessage("Hey");
    }

      
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split (" ")

    switch (args[0]) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "cry":
            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author.tag} is sad`)
                .setImage("https://cdn.weeb.sh/images/ryVBX8mw-.gif")
            message.channel.sendEmbed(embed);
            break;
           
        default:
            message.channel.sendMessage("Invalid command")

        
    }  
     
});

bot.login(process.env.TOKEN);
