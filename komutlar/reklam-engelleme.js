const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('aç yada kapat yazmalısın! Örnek: reklam-engel aç')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`reklam_${message.channel.id}`, 'acik').then(i => {
      message.channel.send('✅ Reklam Engel Bu Kanalda Başarıyla Açıldı! Üyeleri Yasakla yetkisine sahip olanlar`ın reklama engellenmicektir.')
    })
  }
  if (args[0] == 'kapat') {
    db.set(`reklam_${message.channel.id}`, 'kapali').then(i => {
      message.channel.send('✅ Reklam Engel Bu Kanalda başarıyla kapatıldı! Artık herkes reklam yapabilir.')
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklam'],
  permLevel: 0
};

exports.help = {
  name: 'reklam-engelleme',
  description: '[Admin Komutu]',
  usage: 'reklam-engelleme'
};