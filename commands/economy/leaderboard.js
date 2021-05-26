const Discord = require ('discord.js')

const eco = require ('discord-economy')

module.exports = {
	commands: ['leaderboard','lb'],
	minArgs: 0,
	maxArgs: 0,

	callback: async (message,arguments,text) => {
		 if (message.mentions.users.first()) {
 
      let output = await eco.Leaderboard({
        filter: x => x.balance > 50,
        search: message.mentions.users.first().id
      })
      message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output} on my leaderboard!`);
 
    } else {
 
      eco.Leaderboard({
        limit: 3, 
        filter: x => x.balance > 50 
      }).then(async users => { 
	        
let firstplace;
let secondplace;
let thirdplace;

if (users[0]) firstplace = await message.client.users.fetch(users[0].userid) 
if (users[1]) secondplace = await message.client.users.fetch(users[1].userid)
if (users[2]) thirdplace = await message.client.users.fetch(users[2].userid)

const embed = new Discord.MessageEmbed()
.setTitle ('My leaderboard:')
.addField (`1 - ${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].balance || 'None'}`,"\u200b")
.addField (`2 - ${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].balance || 'None'}`, "\u200b")
.addField (`3 - ${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].balance || 'None'}`,"\u200b")
 
        message.channel.send(embed)
// 			`My leaderboard:
 
// 1 - ${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].balance || 'None'}
// 2 - ${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].balance || 'None'}
// 3 - ${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].balance || 'None'}`
 
      })
 
    }
	}
}