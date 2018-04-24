const Discord = require("discord.js");
const client = new Discord.Client();


var prefix = ("!")

bot.on("ready", function() {
    bot.user.setGame("Command: !help");
    console.log("connected")
});

client.login(process.env.TOKEN);

client.on("message", message => {
    if (message.content === prefix + "help"){  
        message.channel.sendMessage("Liste des commandes: \n -!help");
    }

    if (message.content === "ping"){  
        message.reply("Pong !");
        console.log('Ping Pong !');
    }   
        if (message.content === prefix + "info"){  
        message.reply("J'ai été coder par Dotei !");
        console.log('info bot !');
    }
        if (message.content === "ching"){  
        message.reply("Chang!");
        console.log('Ching Chang!');
    }    
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
    
});

