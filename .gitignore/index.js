const Discord = require("discord.js");

const PREFIX ="!"

var bot = new Discord.Client();

client.login(process.env.TOKEN);


bot.on("ready", function() {
    console.log("Ready");
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
