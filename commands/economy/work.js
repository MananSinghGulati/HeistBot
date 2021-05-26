const Discord = require('discord.js')
const eco = require('discord-economy')
module.exports = {
	commands: 'work',
	minArgs: 0,
	maxArgs:2,
	cooldown: 5,
	callback: async (message,arguments,text) => {
		var output = await eco.Work(message.author.id)
    //50% chance to fail and earn nothing. You earn between 1-100 coins. And you get one out of 20 random jobs.
    if (output.earned == 0) return message.reply('Awh, you did not do your job well so you earned nothing!')
    message.channel.send(`${message.author.username}
You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
You now own :money_with_wings: ${output.balance}`)
 
 
   
	}
}