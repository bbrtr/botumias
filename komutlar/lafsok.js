exports.run = async (client, msg, args) => {
  let kufur=[
    "Laf Sokma Kapak Olursun Yalvarma Köpek Olursun Az Yanımda Durda Belki Adam Olursun !!",
    "Ben İki Yüzli İsem Birisini Sana Veremde Yüzsüzlükten Kurtul !!",
    "Herşeyi Bilmene Gerek Yok Haddini Bil Yeter !!",
    "Beni Eleştireceğine Git Beynini Geliştir Daha İyi !!",
    "Yalanım Yok Aklımdasın Hala... Ne Yapayım Güzelim Buda Benim Kusurum; Gereksiz Şeyleri Kafama Çok Takıyorum",
    "Değmeyen Birine Dönüp Bakmam Ben. Adamsa NOTUNU Hayvansa OTUNU Verip Giderim.!!",
    "Senin Prenses Olabileceğin Tek Saray, SİMİT SARAYI, Tatlım.!!",
    "Ağzımı Bozmaya Gerek Yok. Gülüşlerimle De Küfür Edebiliyorum.!!",
    "Seni Sana Anlatsam, “Oha, Bu Kadar Ş*REFSİZ Olunmaz Ki !” Dersin.!!",
    "Attığınız Ya Da Atacaklarınız Kazıkları Saklıyorum, Saklıyorum Ki Gün Gelip Bana Döndüğünüzde Sizi Ağırlayacak Yerim Olsun.!!",
    "Hani sen bana mecbursun havasında olanlar var ya. Onlar o havada takılsınlar; ben bana yeter de artarım, artanımla da onlara hava katarım.!!",
    "Şimdi neden seni hazmedemediğimi daha iyi anlıyorum. Bünye Haram Lokmayı kaldırmıyor. Söylemeyi unutmuşum.!!",
    "Geriden gidermisin ?? Babalar önden Giderlerde",
    "\n- Lan Sen Adammısın Oğlum !! \n+ Ne Oldu Sanamı Lazım Bana Soruyosunda !!",
    "\n- Ya Seninle Uğraşamıcam \n+ Zaten Bana Bulaşacak O Kapasite Sende Yok",
    "\n- Benim Yanımda Aslan Ananın Yanında Kedicik Oluyomuşsunda Eve Çok Girip Çıkıyorum Ananın Yattığı Yatak Sırf Bendende. \n+ Ya Ne Oldu Şimdide Benim Yaptığım Faaleiyetlerimi Kullanıyosun .!!",
  ]
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle.')
}});
  if(member.id === "sahip id")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Hoop! Yapımcıma Laf Sokamazsın !!`)
}}) 
   if(member.id === "sahip id")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Yapımcıma Laf Sokamazsın !!`)
}}) 
  if(member.id === "sahip id")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Hoop! Yapımcıma Laf Sokamazsın !!`)
}}) 
 
  if(member.id === client.user.id){
    msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Bana Laf Sokamazsın !!`)
}})
  }
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${kufur[Math.floor(Math.random() * 16)]}.`)
}})
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
aliases: ['laf','lafsok','lafsokma'],
permLevel: 0
};
exports.help = {
name: 'laf-sok',
description: 'atasözü',
usage: 'laf-sok'
};