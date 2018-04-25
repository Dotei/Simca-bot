const Discord = require("discord.js");

const TOKEN = "NDM4MjkyNjgzODcwNTY4NDQ4.DcCfZQ.wJjozX0tXzb3xbSZ1bxh_rkyn_s"
const PREFIX ="!"
const botconfig = require("./botconfig.json");
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const config = require("./config.json");


var bot = new Discord.Client();

bot.login(process.env.TOKEN);

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
        if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
        if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
        if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }


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
    
        if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
          const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
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

     
