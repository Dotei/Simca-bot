const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("!")

bot.on("ready", function() {
    bot.user.setGame("Command: !help");
    console.log("connectedç")
})



bot.on("message", message => {
    if (message.content === prefix + "help"){  
        message.channel.sendMessage("Liste des commandes: \n -!help");
    }

    if (message.content === "ching"){  
        message.reply("Chang !");
        console.log('Ching chang !');
    }
        if (message.content === "ping"){  
        message.reply("Pong !");
        console.log('Ping Pong !');
    }
   
});

bot.login(process.env.TOKEN);
