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
    	var sayings = ["Il est certain",
										"C'est décidément vrai",
										"Sans aucun doute",
										"Oui définitivement",
										"Vous pouvez compter dessus",
										"Yep",
										"Probablement",
										"Les perspectives sont bonnes",
										"Oui!",
										"il est preferable que je ne le dise pas"
										"Jamais",
										"On me dit dans l'oreillette que non",
										"On s'en fout non ?",
										"C'est une blague?"];

			var result = Math.floor((Math.random() * sayings.length) + 0);
			bot.reply(message, sayings[result]);
    }

    // Wolfram Question Context
    // Check and make sure the start of the message is the right command
    // Then pass the rest of the phrase to wolfram
    if (message.content.substring(0, 10) == "!question ") {
    	Wolfram.query(message.content.substring(10, message.content.length), function(err, result) {
				if(err)
					bot.reply(message, "Désolé, je ne pouvais pas traiter la question en ce moment");
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
	bot.sendMessage(server, "Un nouveau membre est arrivé. Bienvenue, " + user.username + " à " + server.name + ". Tapez! Help pour les commandes.");
});

// When the bot gets dc/d
bot.on('disconnected', function () {
    console.log('Disconnected.');
    process.exit(1);
});

    
});

