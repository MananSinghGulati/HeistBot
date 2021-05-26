const { tictactoe } = require ('reconlx')

module.exports = {
  commands: "tictactoe",

   callback: async (message, arguments, text ) => {
    const member = message.mentions.members.first()

    if (!member) return message.channel.send('Please specify a user to play against')

    new tictactoe ({
      player_two: member, 
      message: message,
    })
  }
}