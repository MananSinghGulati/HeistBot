const Discord = require('discord.js')
const eco = require('discord-economy')

module.exports = {
	commands: ['dacc'],
	minArgs:0,
	maxArgs:1,

	callback: async (message, arguments, text) => {

		if(message.author.id !== '414329193908797440') {
			return message.channel.send ('sheesh become an owner')
		}
			


    let user = message.mentions.users.first()
    if (!user) return message.reply('Please specify a user I have to delete in my database!')
 
  
    let output = await eco.Delete(user.id)
    if (output.deleted == true) return message.reply('Successfully deleted the user out of the database!')
 
    message.reply('Error: Could not find the user in database.')
			}
	}
