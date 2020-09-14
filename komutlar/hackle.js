const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kimi Hackleyeceğinizi Yazmadınız!**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor('RANDOM')
    .setDescription(`** ${mesaj} ` + message.author.username + ' Seni Hackledi.    YOU HAVE BEEN HACKED**')
        .setImage(``)

    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hackle',
  description: 'İstedğiniz kişiyi hacklersiniz.',
  usage: 'hackle'
}; 
//STAR | Kod Paylaşım 
