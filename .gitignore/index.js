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

bot.on("message", function(message){
		if (message.content === "!help") {
			bot.reply(message, 
				"Things I can do:" +
				"\n\n`!help` - Show's what I can do" +
				"\n`!question <your question>` - Ask and you shall recieve" +
				"\n`!roll` - Roll a number between 1-100" +
				"\n`!flip` - Flip a coin" + 
				"\n`!8ball` - Ask the magic 8ball a question");
		}

    if (message.content === "!roll") {
  		var result = Math.floor((Math.random() * 100) + 1);
  		bot.reply(message, "You rolled a: " + result);
    }

    if (message.content === "!flip") {
    	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		bot.reply(message, "The coin landed on heads");
    	} else if (result == 2) {
    		bot.reply(message, "The coin landed on tails");
    	}
    }

    if (message.content === "!8ball") {
    	var sayings = ["It is certain",
										"It is decidedly so",
										"Without a doubt",
										"Yes, definitely",
										"You may rely on it",
										"As I see it, yes",
										"Most likely",
										"Outlook good",
										"Yes",
										"Signs point to yes",
										"Reply hazy try again",
										"Ask again later",
										"Better not tell you now",
										"Cannot predict now",
										"Concentrate and ask again",
										"Don't count on it",
										"My reply is no",
										"My sources say no",
										"Outlook not so good",
										"Very doubtful"];

			var result = Math.floor((Math.random() * sayings.length) + 0);
			bot.reply(message, sayings[result]);
    }

    // Wolfram Question Context
    // Check and make sure the start of the message is the right command
    // Then pass the rest of the phrase to wolfram
    if (message.content.substring(0, 10) == "!question ") {
    	Wolfram.query(message.content.substring(10, message.content.length), function(err, result) {
				if(err)
					bot.reply(message, "Sorry, I couldn't process the question at this time");
				else if (result.queryresult.pod != undefined) {
					// The final result
					var text = '';
					for(var a=0; a < result.queryresult.pod.length; a++) {
						var pod = result.queryresult.pod[a];
						if (resultOpts.indexOf(pod.$.title) > -1) {
							for(var b=0; b<pod.subpod.length; b++) {
								var subpod = pod.subpod[b];
								for(var c=0; c<subpod.plaintext.length; c++) {
									// We append to the result text just incase there are more than 1 results
									text += "\n**" + resultOpts[resultOpts.indexOf(pod.$.title)] + "**: ```";
									// Sometimes Wolframs decimal points are huge, so if the result is a decimal approximation 
									// we cut it down to less characters
									text += resultOpts[resultOpts.indexOf(pod.$.title)] == 'Decimal approximation' ? subpod.plaintext[c].substring(0, 7) + "```" : subpod.plaintext[c] + "```";
								}
							}
						}
					}
					// Send the final reply after all data is collected
					bot.reply(message, text);
				} else {
					// If Wolfram doesn't have an answer
					bot.reply(message, "I don't seem to have an answer to that question");
				}
			});
    }
});

// When a new person joins the server
// let them now about the bot
bot.on('serverNewMember', function(server, user) {
	bot.sendMessage(server, "A new member has arrived. Welcome, " + user.username + " to " + server.name + ". Type !help for commands.");
});

// When the bot gets dc/d
bot.on('disconnected', function () {
    console.log('Disconnected.');
    process.exit(1);
});
