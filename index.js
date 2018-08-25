
const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require('./config.json')
const links = require('./links.json');


bot.on('ready', () => {
    bot.user.setActivity('Ideias novas.', {url: 'https://twitch.tv/socororo', type: 'LISTENING'});
    console.log('Logado com sucesso!');
    console.log('Created by Loateey');
});
bot.on('guildMemberAdd', member => {
    if(member.guild.id !== "478861971471466499") return;
        let embed= new Discord.RichEmbed()
        .setTitle(member.user.tag+ '\n :inbox_tray: Bem vindo(a)!')
        .setDescription(`Olá <@${member.id}>,a bem vindo ao discord da STS! Nós temos produtos de qualidade e preços muito baratos.`)
        .setThumbnail(member.user.avatarURL)
        .setColor("#ff80d5")
        .addField("ID", member.id, true)
    bot.channels.get('480751269221236736').send(embed);
});

bot.on('message', async message => {
   responseObject = links;
   if(responseObject[message.content]) {
       message.channel.send(responseObject[message.content]);
   }

   let messageArray = message.content.split(" ");
   let cmd = messageArray[0]
   

   if (cmd == `${config.prefix}site`) {
    const embed = new Discord.RichEmbed()
    .setAuthor(" Site",  )
    .addField("Novidades", "teste")
    .setDescription("teste 1")
    .setColor("ff0000")
    .setThumbnail(message.author.avatarURL)

    message.channel.send(embed)
}


if (cmd == `${config.prefix}aplicar`) {
    const embed = new Discord.RichEmbed()
    .setTitle(" **APLICAÇÃO**",  )
    .setDescription("teste 1")
    .setColor("ff0000")
    .setThumbnail(message.author.avatarURL)

    message.channel.send(embed)
}



if (cmd == `${config.prefix}say`) {
        const args = message.content.split(" ").slice(1);
        
        const embed = new Discord.RichEmbed()
        const sayMessage = args.join(" ");
        embed.setAuthor('STS:', 'https://cdn.discordapp.com/attachments/471667502896775168/480845710842003477/download_1.jpg')
        message.delete().catch();
        embed.setColor("#ff0000")
        embed.setFooter("Atenciosamente STS")
        embed.setTimestamp()
        embed.setDescription(sayMessage)
        message.channel.send(embed)
      }
    
      if (cmd == `${config.prefix}avisar`) {
        const args = message.content.split(" ").slice(1);
      message.delete();
message.channel.send(args.join(" "))
      }

        /*bot.on('guildMemberAdd', member => {
            if(member.guild.id !== "478861971471466499") return;
                let embed= new Discord.RichEmbed()
                .setAuthor(member.user.username, member.user.avatarURL)
                .setTitle(`Bem vindo(a) ${member.user.username}`)
                .setColor("#ff80d5")
                .setTimestamp()
                .setFooter(`Boas vindas da ${bot.user.username}`, bot.user.displayAvatarURL)
                .addField("Usuário", member.user.username+member.user.tag, true)
                .addField("ID", member.id, true)
            bot.channels.get('478952059253686272').send(embed);
        });*/
        if (message.content.includes("https://discord.gg/")) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                message.delete();
            }
    
        }

        if(message.content.startsWith(`!limpar`)) {
            if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Somente para `Administradores`")
          const args = message.content.split(" ").slice(1);
            let limparArgs = Number(args[0]);
            if(!limparArgs || isNaN(limparArgs) || limparArgs < 2 || limparArgs > 100) return message.channel.send(`Você precisa botar um número entre 2 e 100.`);
            else{
            let mensagens = await message.channel.fetchMessages({limit: limparArgs});
            message.channel.bulkDelete(mensagens);
            message.channel.send(`Chat limpo pelo ${message.author}.`);
            }
        }
        if(message.content.startsWith(`!ping`)) {
            return message.channel.send(`:tada: **|** Aproximadamente ${Math.round(bot.ping)}ms!`);
            }

           
    
            if(message.content.startsWith(`!ban`)) {
                if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Somente para `Administradores`")
                const args = message.content.split(" ").slice(1);
                let member = message.mentions.members.first();
                let motivo = args.slice(1).join(' ')
               if(!member) return message.channel.send(`**ERRO**: Mencione o membro que você deseja punir`)
               if(!motivo) {
               motivo = 'Sem motivo informado'
               }
               member.ban()
               message.channel.send('**BAN**: Membro banido com sucesso')
               bot.channels.get("478950732406456320").send({
                 "embed":{
                   "color":55512,
                   "fields":[
                     {
                       "name": "Usuário banido:",
                       "value": "`"+member.user.tag+"`",
                       "inline": true
                     },
                     {
                       "name": "Banido por:",
                       "value": "`"+message.author.tag+"`",
                       "inline": true
                     },
                     {
                       "name": "Motivo:",
                       "value": "`"+motivo+"`",
                       "inline": true
                     },
                     {
                       "name": "Canal do banimento:",
                       "value": "`"+message.channel.name+"`"
                     }
                   ]

                 }
               })
               }

               if(message.content.startsWith(`!kick`)) {
                if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Somente para `Administradores`")
                const args = message.content.split(" ").slice(1);
                let member = message.mentions.members.first();
                let motivo = args.slice(1).join(' ')
               if(!member) return message.channel.send(`**ERRO**: Mencione o membro que você deseja punir`)
               if(!motivo) {
               motivo = 'Sem motivo informado'
               }
               member.kick()
               message.channel.send('**KICK**: Membro mutado com sucesso')
               bot.channels.get("478950732406456320").send({
                 "embed":{
                   "color":55512,
                   "fields":[
                     {
                       "name": "Usuário Punido:",
                       "value": "`"+member.user.tag+"`",
                       "inline": true
                     },
                     {
                       "name": "Punido por:",
                       "value": "`"+message.author.tag+"`",
                       "inline": true
                     },
                     {
                       "name": "Motivo:",
                       "value": "`"+motivo+"`",
                       "inline": true
                     },
                     {
                       "name": "Canal do banimento:",
                       "value": "`"+message.channel.name+"`"
                     }
                   ]

                 }
               })
               }
               if(message.content.startsWith(`!mute`)) {
                const args = message.content.split(" ").slice(1);
                let member = message.mentions.members.first();
                let motivo = args.slice(1).join(' ')
               if(!member) return message.channel.send(`**ERRO**: Mencione o membro que você deseja punir`)
               if(!motivo) {
               motivo = 'Sem motivo informado'
               }
               
              
               message.channel.send('**MUTE**: Membro mutado com sucesso')
               bot.channels.get("478950732406456320").send({
                 "embed":{
                   "color":55512,
                   "fields":[
                     {
                       "name": "Usuário Mutado:",
                       "value": "`"+member.user.tag+"`",
                       "inline": true
                     },
                     {
                       "name": "Mutado por:",
                       "value": "`"+message.author.tag+"`",
                       "inline": true
                     },
                     {
                       "name": "Motivo:",
                       "value": "`"+motivo+"`",
                       "inline": true
                     },
                     {
                       "name": "Canal do banimento:",
                       "value": "`"+message.channel.name+"`"
                     }
                   ]
                
                 }
                
               })
               }
   });



bot.login(config.token);
