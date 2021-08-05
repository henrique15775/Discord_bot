const Discord = require('discord.js');
const bot = new Discord.Client();

const ytdl = require('ytdl-core');
verify = false
fila = [];
counter = 0;
bot.login("ODYxMjYzNzE0NDI5ODI5MTMy.YOHQVw.4aZ4DvtoUQ-hF2YUZKjls-o4gQY");
bot.once('ready',() => {
  console.log(`Bot online: ${bot.user.tag}!!`)
});

const bot_recursivo = (connection) => {
  if(fila.length > 0){
  const watcher =  connection.play(
    ytdl(fila[0], { filter: 'audioonly' }))
watcher.on('speaking', (response) => {
      if (response == 0){
        fila.shift();
        console.log(fila);
        verify = false;
        bot_recursivo(connection);
      }
    });
verify = true;
    console.log("bora ver se vai dar...");
  }else{
    console.log('lista vazia!!!');
  }
      };

 
bot.on('message', async (message) =>{

  if (message.content.slice(0,5) === '!play'){
    //  fila.push(message.content.slice(6));
      const voiceChannel = message.member.voice.channel;
      const connection = await voiceChannel.join();

      console.log(message.content);
      
      if(verify === false){
        fila.push(message.content.slice(6));
      //fila.push(message.content.slice(6));
      bot_recursivo(connection,fila);
      /*const watcher = connection.play(
          ytdl(fila[0], { filter: 'audioonly' }));
      watcher.on('speaking', (response) => {
            if (response == 0){
              fila.shift();
              console.log(fila);
              verify = false;
              bot_recursivo(voiceChannel,connection,watcher);
            }
          });
      verify = true;
      */
        }else{
          fila.push(message.content.slice(6));
      }
    console.log('uiiiii');
  }

    });
