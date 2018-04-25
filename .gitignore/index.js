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
    
    if (message.content === PREFIX + "kick"){  
    
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Can't find user!");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
    
        let kickEmbed = new Discord.RichEmbed()
        .setDescription("~Kick~")
        .setColor("#e56b00")
        .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
        .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Kicked In", message.channel)
        .addField("Tiime", message.createdAt)
        .addField("Reason", kReason);
    
        let kickChannel = message.guild.channels.find(`name`, "incidents");
        if(!kickChannel) return message.channel.send("Can't find incidents channel.");
    
        message.guild.member(kUser).kick(kReason);
        kickChannel.send(kickEmbed);
    
        return;
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
                    .setTitle(`Simca punches ${message.author.tag} `)
                    .setImage("http://i.imgur.com/SUdqF9w.gif")
                message.channel.sendEmbed(embed);
            break;
           

        
    }  
     
});

     
