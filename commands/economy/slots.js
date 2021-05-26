const Discord = require('discord.js')
const eco = require ('discord-economy')

module.exports = {
	commands: ['slots'],
	minArgs:1,
	maxArgs:1,
	// cooldown: 5,

	callback: async (message,arguments,text) => {
		
    let amount = arguments[0] //Coins to gamble
 
    if (!amount) return message.reply('Specify the amount you want to gamble!')
 
    let output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('You have fewer coins than the amount you want to gamble!')
 
    let gamble = await eco.Slots(message.author.id, amount, {
      width: 3,
      height: 1
    }).catch(console.error)
    message.channel.send(gamble.grid)//Grid checks for a 100% match vertical or horizontal.
    message.reply(`You ${gamble.output}! New balance: ${gamble.newbalance}`)
	}
}