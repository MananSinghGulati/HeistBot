const Discord = require('discord.js')
const eco = require('discord-economy')

module.exports = {
	commands: ['manandaily'],
	minArgs: 0,
	maxArgs: 0,

	callback: async (message,arguments,text) => {

		 let output = await eco.Daily(message.author.id)
    //output.updated will tell you if the user already claimed his/her daily yes or no.
 
    if (output.updated) {
 
      let profile = await eco.AddToBalance(message.author.id, 3000)
      message.reply(`You claimed your daily coins successfully! You now own ${profile.newbalance} coins.`);
 
    } else {
      message.channel.send(`Sorry, you already claimed your daily coins!\nBut no worries, over ${output.timetowait} you can daily again!`)
    }
	}
}