const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("!")
var bot = new Discord.client();

bot.on("ready", function() {
    bot.user.setGame("Command: !help");
    console.log("connectedç")
})

bot.login(process.env.TOKEN);

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
	if(message.content === prefix + "infodiscord") {
		var embed = new Discord.RichEmbed()
			.setDescription("Information Discord")
			.addField("Nom du Discord", message.guild.name)
			.addField("Crée le", message.guild.createdAt)
			.addField("Tu as rejoin le", message.member.joinedAt)
			.addField("utilisateurs sur le doscord", message.guild.memberCount)
			.setColor("0x0000FF")
    	 message.channel.sendEmbed(embed)

     }

});
    


