const Discord = require ('discord.js')

module.exports = {
	commands: ['nuke'],
	minArgs: 0,
	maxArgs: 0,

	callback: (message,arguments,text) => {
		message.channel.send ("https://tenor.com/view/explosion-mushroom-cloud-atomic-bomb-bomb-boom-gif-4464831")
		message.react ('💣')
	},
	requiredRoles :[]
}