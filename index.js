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

const bot_recursivo = (connection,msg) => {
  if(fila.length > 0){
    const watcher =  connection.play(
      ytdl(fila[0], { filter: 'audioonly' }));
    watcher.on('speaking', (response) => {
      if (response == 0 || msg == "!skip"){
        fila.shift();
        console.log(fila);
        verify = false;
        bot_recursivo(connection);
      }
    });
    verify = true;
    console.log(`Tocando ${fila[0]} `);
  }else{
    console.log('Fila vazia!!!');
  }
      };

 
bot.on('message', async (message) =>{

  if (message.content.slice(0,5) === '!play'){
    
      const voiceChannel = message.member.voice.channel;
      const connection = await voiceChannel.join();
  
      console.log(message.content);
      
      if(verify === false){
        message.channel.send(`Adicionado pra fila!`);
        fila.push(message.content.slice(6));
        bot_recursivo(connection,message.content);
      
        }else{
          message.channel.send(`Adicionado pra fila!`);
          fila.push(message.content.slice(6)); 
      }}else if(message.content == '!skip'){
        bot_recursivo(connection,message.content);
      }else{
        console.log("MINHA POMBAAAAA")
      }
  });
