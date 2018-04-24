const Discord = require("discord.js");

const TOKEN = "NDM4MjkyNjgzODcwNTY4NDQ4.DcCfZQ.wJjozX0tXzb3xbSZ1bxh_rkyn_s"
const PREFIX ="!"
const botconfig = require("./botconfig.json");

var bot = new Discord.Client();

bot.login(process.env.TOKEN);

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message){
    if (message.author.equals(bot.user)) return;
    })

bot.on("message", (message) => {
    if (message.content === "bonjour"){
        message.reply("Hey");

  }
         
      
    if (message.content === PREFIX + "info"){  
        message.reply("Je suis toujours en devellopement, Et j'ai été coder par Dotei !");
        console.log('info bot !');
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
                    .setTitle(`Simca punches ${message.author.tag} `)
                    .setImage("http://i.imgur.com/SUdqF9w.gif")
                message.channel.sendEmbed(embed);
            break;
           

        
    }  
     
});
