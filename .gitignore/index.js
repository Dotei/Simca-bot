const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("!")

bot.on("ready", function() {
    bot.user.setGame("Command: !help");
    console.log("connectedç")
});

bot.login(process.env.TOKEN);

bot.on("message", message => {
    if (message.content === prefix + "help"){  
        message.channel.sendMessage("Liste des commandes: \n -!help");
    }

    if (message.content === "ping"){  
        message.reply("Pong !");
        console.log('Ping Pong !');
    }
    
    }
if (message.content.startsWith('h!8ball')) {
    if ( message.content.endsWith('?')) {
      var answers = [
      '8ball: Peut être', '8ball: Lol non.', '8ball: Je l'espère.', '8ball: Dans tes rêves.',
      '8ball: Il y a de fortes chances.', '8ball: Très probable', '8ball: Je pense que Oui', '8ball: J'espère que non',
      '8ball: J'espere.', '8ball: Jamais!', '8ball: NOOPE!', '8ball: Ahaha! Vraiment?!?', '8ball: Pfft.',
      '8ball: Désoler, mais non !.', '8ball: yeaaa.', '8ball: Absolument hors de question.', '8ball: ehhhhhh, je ne sais pas.',
      '8ball: L'avenir est incertain.', '8ball: Je préfère ne pas dire.', '8ball: On s'en fout?',
      '8ball: Possible.', '8ball: Jamais! jamais! jamais!', '8ball: Il y a une petite chance.', '8ball: Oui!'];
      var answer = answers[Math.floor(Math.random() * answers.length)];
    } else {
      message.channel.sendMessage('Ce n'est pas une question valide. S'il vous plaît ajouter à votre question "?"!')
    }
  message.channel.sendMessage(answer);
}
});
