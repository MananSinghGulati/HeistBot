const pagination = require("discord.js-pagination");
const Discord = require("discord.js");

module.exports = {
  commands: "help",
  minArgs: 0,
  maxArgs: 0,


 callback: async (message, arguments, text)=> {
    const fun = new Discord.MessageEmbed()
      .setTitle("Fun!")
      .addField("`8-ball`", " Tells the answer to your question")

      .addField("`Meme`", " Displays some of the finest memes on Reddit")

      .addField("`Dank-meme`", " Displays some of the dankiest memes on Reddit")

      .addField("`pp`", " tells the size of your little one 8=D")

      .addField("`gayrate`", " Tells how gay you are ")

      .addField("`obama`", " Sends an obama! 🥵 ")

      .addField("`tictactoe`", " A classic game of tictactoe")

      .addField(
        "`Boop`",
        "Boops a user the same kind the command is , USELESS!"
      )

      .addField("`Mod`", " Ever heard of a discord mod ? :D")

      .addField("`tictactoe`", " A classic game of tictactoe")

      .setTimestamp();

  

    const Utility = new Discord.MessageEmbed()
      .setTitle("Utility")
      .addField(
        "`Covid`",
        "Tells the covid cases for a specific country or the entire world combined"
      )

      .addField("`dm`", "Message a user through the bot")
      .addField("`Ping`", "Tells the latency of the bot")
      .addField("`Invite`", "Gives the invite link for the bot")
      .addField("`Vote`", "Gives the top.gg voting link for the bot")
      .addField("`Purge`", "Clears specific amount of messages")
      
      .setTimestamp();

      const Image = new Discord.MessageEmbed()

      .setTitle("Image")
      .addField ("`Avatar`", "Shows the avatar specified user's avatar ")
      .addField ("`Triggered`", "Manipulates the user's avatar and puts a trigger meme on it")
			.addField ("`hitler`", 'heil hitler')
			.addField ("`kiss`", "kiss someone or yourself (if lonely)")
      .setTimestamp();

        const DankMemer = new Discord.MessageEmbed()
      .setTitle("Dank-Memer!")
      .addField(
        "`heist`",
        "Unlocks a channel for a **specific** role mentioned"
      )
      .addField("`Over`", "Locks the channel for the role mentioned")
      .addField(
        "`Value (coming soon!)`",
        "tells the average market value for an item"
      )
      .setTimestamp();


    const pages = [fun, Image, Utility, DankMemer];

    const emojiList = ["⏪", "⏩"];

    const timeout = "120000";

    pagination(message, pages, emojiList, timeout);
  },
};
