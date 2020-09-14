const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {

  let prefix = ayarlar.prefix

  if (!params[0]) {
    message.channel.sendCode("asciidoc",`= Komut Grupları =

${prefix}afk : Afk Olursunuz.
${prefix}ara155 :: Polisi Ararsınız (Şaka Amaçlı)
${prefix}avatar :: Avatarınızı Gösterir.
${prefix}aşkölçer :: Etiketlediğiniz Kişiyle Aşkınızı Ölçer.
${prefix}balıktut :: Balık Tutarsınız.
${prefix}ban :: Etiketlediğiz Kişiye Ban Atarsınız.
${prefix}banlimit :: Ban Limit Öğrenirsiniz.
${prefix}kasa-aç  :: CS-GO Kasa Açarsınız.
${prefix}duyuru :: Duyuru Yaparsınız.
${prefix}dürt :: Etiketlenen Kişiyi Dürtersiniz.
${prefix}ekran-paylaş :: Seslide Ekran Paylaşır.
${prefix}espri :: Espri Yapar.
${prefix}fakemesaj :: Fake Mesaj Atar.
${prefix}fbi :: FBİ Basar.
${prefix}google :: Googlede Arama Yapar.
${prefix}hackle :: Etiketlenen Kişiyi Hacklersiniz.
${prefix}hava-durumu :: Belirtilen Şehirin Hava Durumunu Gösterir.
${prefix}hg :: Hoşgeldin Resmi Atar.
${prefix}istatistik :: Botun İstatistiklerini Gösterir.
${prefix}kaçcm :: Malafatınızı Ölçer.!kick :: Belirtilen Kişiyi Sunucudan Atar.
${prefix}kralol :: Kral Olursunuz.
${prefix}lafsok :: Etiketlenen Kişiye Laf Sokarsınız.
${prefix}nahçek :: Etiketlenen Kişiye Nah Çekersiniz.
${prefix}oylama :: Oylama Yaparsınız.
${prefix}reklam-engelleme :: Reklam Engellersiniz.
${prefix}rol-info :: Rol Bilgilerini Gösterir.
${prefix}sayaç-ayarla :: Sayaç Ayarlarsınız.
${prefix}servericon :: Sunucunun Resmini Atar.
${prefix}söv :: Etiketlenen Kişiye Söver.
${prefix}tr :: Türk Bayrağı Gösterir.
${prefix}trump :: Trumpa Mesaj Yazdırırsınız.
${prefix}uç :: Etiketlenen Kişiye Uçarsınız.
${prefix}yavaş-mod :: Sohbete Yavaş Mod Eklersiniz.
${prefix}yetkililist :: Yetkilileri Gösterir.
${prefix}çekiliş :: Çekiliş Yaparsınız.
${prefix}çeviri :: Google Çeviri Yapar.
${prefix}öp :: Etiketlenen Kişiyi Öpersiniz.






`)
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} =

Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Komut kategorilerini gösterir.',
  usage: 'yardım'
};
