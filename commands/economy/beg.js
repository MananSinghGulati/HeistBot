const Discord = require('discord.js')
const eco = require('discord-economy')

module.exports = {
	commands: ['beg'],
	minArgs: 0,
	maxArgs: 0,
	// cooldown: 10,

	callback: async (message,arguments,text) => {

    //output.updated will tell you if the user already claimed his/her daily yes or no.
 
    
      let profile = await eco.AddToBalance(message.author.id, Math.random()* 600)
      message.reply(`You claimed some coins successfully! You now own ${profile.newbalance} coins.`);
 
    } 
	}
