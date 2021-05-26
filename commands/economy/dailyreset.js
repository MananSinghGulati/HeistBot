const Discord = require('discord.js')
const eco = require('discord-economy')

module.exports = {
	commands: ['dreset'],
	minArgs:0,
	maxArgs:0,

	callback: async (message, arguments, text) => {
		if(message.author.id !== '414329193908797440') {
			return message.channel.send ('sheesh become an owner')
		}
		if (message.author.id === '414329193908797440') {
	 let output = await eco.ResetDaily(message.author.id)
 
    message.reply(output) //It will send 'Daily Reset.'
	}
	}
}