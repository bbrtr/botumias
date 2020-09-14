const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

exports.run = async (bot, message, args, guild) => {
    var duyuru = args.slice(0).join("  ");
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:x: Bu özelliği kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`);
  if(!duyuru) return message.reply("Duyuru Atabilmek İçin Mesaj Girmelisin.");
const çocukadam = new Discord.RichEmbed()
.setDescription(duyuru)
.setAuthor(`${message.guild.name} Duyuru`)
.setThumbnail(message.guild.iconURL)
message.channel.send(çocukadam)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'Duyuru Yapar.',
  usage: 'duyuru'
};

