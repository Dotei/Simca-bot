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
        if (message.content === prefix + "info"){  
        message.reply("J'ai été coder par Dotei !");
        console.log('Ping Pong !');
    }
   
    if (message.content.startsWitch(prefix + "sondage")){
	if(message.author.id == "437991432419016714"){
		let args = message.content.split(" ").slice(1);
		var embed = new Discord.RichEmbed()
			.setDescription("Sondage")
			.addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
			.setColor("0xB40404")
			.setTimestamp()
		message.guild.channels.find("namee", "sondage").sendEmbed(embed)
		.then(function (message){ 
			message.react("✔")
			message.react("✖")

		}).catch(function(){
		});	
		}else{
			return message.reply("tu n'as pas la permission") 
}}})

    
});

bot.login(process.env.TOKEN);
