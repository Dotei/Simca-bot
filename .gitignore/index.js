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
     
});

     
bot.on("message", msg => {

      // Command /help
     if (msg.content.startsWith(PREFIX + "help")) {
      msg.channel.sendMessage("```List of commands : \n\n !version  | Version  \n !help | Toute les commandes \n !cry | réaction \n !punch | se prendre un coup de poing \n    ```");
      console.log("Command executed: !help")
    }
    // Command /version
    if (msg.content.startsWith(PREFIX + "version")) {
      msg.channel.sendMessage("``` Bot Discord Basic - Version 1.0 \n Créateur : Dotei ```");
      console.log("Command executed : /version")
    }

});
