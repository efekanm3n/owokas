const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Matador Army | Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let matador = await data.get(msg.author.id)
        
        if (matador === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("https://discord.gg/HdFft8nuJ2") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.      
          await sleep(1500)
          await msg.channel.send("naber")      
      }
      }
    }
  }
})


client.on("guildCreate", matador => {
  sleep(1000);
  if (
    matador.id === "819924138457169953" ||  // j4j sunucusunun idsi
    matador.id === "819924138457169953"  // j4j sunucusunun idsi
  ) {
    
  } else {
    matador.join();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("840521503937658890") // j4j fast kanal id'si


       a.send("wh") //mesajınız


      }, 15000);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("840521503937658890") // j4j fast kanal id'si


       a.send("wb") //mesajınız


      }, 20000);
})

client.login(process.env.token) // TOKENİ .env e TAŞIDIK
//MATADOR ARMY