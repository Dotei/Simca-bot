const Discord = require("discord.js");
const bot = new Discord.Client();
  
var bot = new Discord.Client();
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
bot.login(process.env.TOKEN);
