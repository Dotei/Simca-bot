const Discord = require("discord.js");

const TOKEN = "NDM4MjkyNjgzODcwNTY4NDQ4.DcCfZQ.wJjozX0tXzb3xbSZ1bxh_rkyn_s"
const PREFIX ="!"
const botconfig = require("./botconfig.json");


var bot = new Discord.Client();

bot.login(process.env.TOKEN);

bot.on("ready", function() {
    console.log("Ready");
});
