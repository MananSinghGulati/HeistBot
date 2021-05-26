const Discord = require ('discord.js')
const eco = require("discord-economy");

module.exports = {
	commands: ['balance', 'bal'],
	minArgs: 0,
	maxArgs: 1,

	callback: async (message,arguments,text) => {
		
		const user = message.author.id
		const taggedUser = message.mentions.users.first()

	if (taggedUser) {
    let output = await eco.FetchBalance(taggedUser.id)
    message.channel.send(`Hey ${taggedUser}! You own ${output.balance} coins.`);
	} else if (user) {
	output = await eco.FetchBalance(message.author.id)
    message.channel.send(`Hey ${message.author.tag}! You own ${output.balance} coins.`);	
	}
	}
}