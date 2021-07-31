const Discord = require('discord.js');
const bot = new Discord.Client();

const ytdl = require('ytdl-core');
verify = false
fila = [];
counter = 0;
bot.login("ODYxMjYzNzE0NDI5ODI5MTMy.YOHQVw.4aZ4DvtoUQ-hF2YUZKjls-o4gQY");
bot.once('ready',() => {
  console.log(`Bot online: ${bot.user.tag}!!`)
}

);
bot.on('message', async (message) =>{

  if (message.content.slice(0,5) === '!play' && verify == false){

      const voiceChannel = message.member.voice.channel;
      const connection = await voiceChannel.join();

      console.log(message.content);
      verify = true;
      const watcher = ?connection.play(
        ytdl(fila[counter], { filter: 'audioonly' }));
        watcher.on('speaking', (valor) => {
          if (valor == 1){
            verify= true
          }

        })

      /* [kkkk,]
      const broadcast = bot.voice.createBroadcast();
      broadcast.play(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));
      // Play "music.mp3" in all voice connections that the client is in
      for (const connection of bot.voice.connections.values()) {
        connection.play(broadcast);*/
      /*watcher.on('end',() => {
        voiceChannel.leave();
        console.log("ACABOOOUUU");

      });*/
    console.log('uiiiii');
  }else{
    fila.push(message.content.slice(6));
  }

    });
