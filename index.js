const express = require('express');
const app = express();
const port = process.env.port || 5000;

// creating server for our app
app.get('/', (req, res) => res.send("Working"));

app.listen(port, () => console.log(`Your app is listining at http://localhost${port}`));
//_______________________________________________________________________________________
const path =require('path')
const fs = require ('fs')
const Discord = require ('discord.js')
const client = new Discord.Client ()
const db = require ('quick.db')
const config = require ('./config.json')
//const commandBase = require ('./commands/command-base')
const mongo = require('./mongo')

client.on('ready',async () => {
  console.log('The client is ready!')

  await mongo().then(console.log("Connected to mongo!"))
	 client.user.setPresence({
    activity: {
      type: "PLAYING",
      name:  `=help | run =vote ! `,
      status: "dnd",
    }
  })


	  
    

  const baseFile = 'command-base.js'
  const commandBase = require (`./commands/${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(option)
      }
    }
  }

  readCommands('commands')

  commandBase.listen(client)
})


client.login(process.env.TOKEN)