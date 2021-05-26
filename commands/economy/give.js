 const Discord = require ('discord.js')
 const eco = require ('discord-economy')
 
 module.exports = {
	 commands: 'give',
	 minArgs: 1,
	 maxArgs: 2,
	
	 callback: async (message,arguments,text) => {

		  let user = message.mentions.users.first()
    let amount = arguments[1]
 
    if (!user){ return message.reply('Reply the user you want to send money to!')}
    if (!amount){ return message.reply('Specify the amount you want to pay!')}
 
    let output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount){
	 return message.reply('You have fewer coins than the amount you want to transfer!') }
 
    let transfer = await eco.Transfer(message.author.id, user.id, amount)
    message.reply(`Transfering coins successfully done!\nBalance from ${message.author.tag}: ${transfer.FromUser}\nBalance from ${user.tag}: ${transfer.ToUser}`)
	 }
 }