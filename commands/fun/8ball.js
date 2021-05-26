const Discord = require ('discord.js')

module.exports = {
	commands: '8ball',
	minArgs: 1,
	maxArgs: null,

	callback: (message, arguments, text) => {
		function doMagic8BallVoodoo() {
    var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];

    return rand[Math.floor(Math.random()*rand.length)];
}
"use strict";

message.channel.send( doMagic8BallVoodoo());
	},

  requiredRoles: [],
}