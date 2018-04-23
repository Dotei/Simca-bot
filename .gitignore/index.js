const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("!")

bot.on("ready", function() {
    bot.user.setGame("Command: !help");
    console.log("connectedç")
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong !')
  }
})

if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

bot.on("message", message => {
    if (message.content === prefix + "help"){  
        message.channel.sendMessage("Liste des commandes: \n -!help");
    }

    if (message.content === "ching"){  
        message.reply("Chang !");
        console.log('Ching chang !');
    }
});
