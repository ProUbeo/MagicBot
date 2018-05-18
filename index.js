const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("MagicBot!")

bot.on('ready', function() {
    bot.user.setUsername("MagicBot")
    bot.user.setPresence({ game: { name: 'brûler des mages malpoli'}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if(message.content.startsWith("m!feu")){
        message.channel.send(`**${message.author.username}** lance la capacité de feu !\nDégâts : 25`,{
        file: "https://orangemushroom.files.wordpress.com/2014/04/ignition-effect.gif"
    })
}
if(message.content.startsWith("m!tornade")){
    message.channel.send(`**${message.author.username}** lance la capacité tornade!\nDégâts : 25`,{
    file: "https://pa1.narvii.com/6394/6e5f4ce3b0f5ea1c28d9788aa2a6eb376a041314_hq.gif"
})
}
if(message.content.startsWith("m!stick-magic")){
    message.channel.send(`**${message.author.username}** lance la capacité stick magic!\nDégâts : 15`,{
    file: "https://orangemushroom.files.wordpress.com/2012/06/magic-booster-effect.gif"
})
}
if(message.content.startsWith("m!nature")){
    message.channel.send(`**${message.author.username}** lance la capacité orbe de la nature!\nDégâts : 25`,{
    file: "https://i.pinimg.com/originals/69/eb/43/69eb43047ff86ade658b2c677c0567ee.gif"
})
}
if(message.content.startsWith("m!glace")){
    message.channel.send(`**${message.author.username}** lance la capacité glace!\nDégâts : 20`,{
    file: "https://blog-imgs-18-origin.fc2.com/e/t/e/eternalhydrogen/skill_21111005_effect.gif"
})
}
if(message.content.startsWith("m!éclair")){
    message.channel.send(`**${message.author.username}** lance la capacité d'éléctricité!\nDégâts : 50`,{
    file: "https://i.pinimg.com/originals/d7/f1/0e/d7f10ed0e12dce0a783373c2ae8b2c61.gif"
})
}
if(message.content.startsWith("m!vent")){ 
    message.channel.send(`**${message.author.username}** lance la capacité vent!\nDégâts : 5`,{
    file: "https://i.pinimg.com/originals/98/51/59/985159cc49c09556b29c2264208028ca.gif"
})
}
if(message.content.startsWith("m!ice-axe")){ 
    message.channel.send(`**${message.author.username}** lance la capacité hache magique!\nDégâts : 50\nSec : 10`,{
    file: "https://2img.net/h/i1200.photobucket.com/albums/bb340/x3TheAran595/Chaos21110011effect.gif"
})
}
if(message.content.startsWith("m!slash")){
    message.channel.send(`**${message.author.username}** a utilisé compétence slach!\nDégâts : 15`,{
    file: "https://i.pinimg.com/originals/9b/7f/62/9b7f623ff55be9b911b1f20c1f836250.gif"
})
}
if(message.content.startsWith("m!implosion")){
    message.channel.send(`**${message.author.username}** lance la capacité implosion!\nDégâts : 50`,{
    file: "https://conserver.files.wordpress.com/2010/03/09.gif"
})
}
if(message.content.startsWith("m!protection")){
    message.channel.send(`**${message.author.username}** lance la capacité protection!\nMur défendant de : 25 dégâts`,{
    file: "https://orangemushroom.files.wordpress.com/2012/06/anti-magic-shell-effect.gif"
})
}
if(message.content.startsWith("m!onde")){
    message.channel.send(`**${message.author.username}** lance la capacité onde!\nDégâts : 30`,{
    file: "https://orangemushroom.files.wordpress.com/2011/11/energy-buster.gif"
})
}
if(message.content.startsWith("m!soin")){
    message.channel.send(`**${message.author.username}** lance la capacité de soins!\nSoigne : 10`,{
    file: "https://i.pinimg.com/originals/2b/6e/9f/2b6e9f46c2cc37569eabe5c40731579c.gif"
})
}
if(message.content.startsWith("m!sword")){
    message.channel.send(`**${message.author.username}** lance la capacité sword!\nDégâts : 75`,{
    file: "https://orangemushroom.files.wordpress.com/2012/07/blaze-up-effect.gif"
})
}
if(message.content.startsWith("m!angel")){
    message.channel.send(`**${message.author.username}** à utiliser la capacité pour avoir des ailes !`,{
    file: "https://i.pinimg.com/originals/ce/0d/8d/ce0d8df5b15699d45caf2b32ef125380.gif"
})
}
if(message.content.startsWith("m!dragon")){
    message.channel.send(`**${message.author.username}** lance le laser du dragon!\nDégâts : 75`,{
    file: "https://2img.net/h/i1156.photobucket.com/albums/p575/x3TheAran5921/Kaiser65121100effect.gif"
})
}
if (message.content === "m!help 1" ){  

    const embed = new Discord.RichEmbed()
    .setTitle("Magie niveau 1")
    .setColor(0xcc0099)
    .setDescription("Voici toute les attaque qu'un mage niveau 1 peu faire")
    .setFooter("Si vous avez un probleme demander de l'aide a un modo ou au autre")
    .addField("Commande magique",
      "m!feu (-25PV) (utilisable 3 foix)\nm!tornade (-25PV)\nm!stick-magic (-15PV) (utilisable 3 foix)\nm!nature (-25PV)\nm!glace (-20PV)")
      .addField("Nombre de PV",
      "100PV pour un mage niveau 1")
  
    message.channel.send({embed});
}
if (message.content === "m!help" ){  

    const embed = new Discord.RichEmbed()
    .setTitle("aide disponible ")
    .setColor(0xcc0099)
    .setDescription("m!help 1\nm!help 2\nm!help 3")
    .setFooter("Si vous avez un probleme demander de l'aide a un modo ou au autre")
  
    message.channel.send({embed});
}
if (message.content === "m!help 2"){  

    const embed = new Discord.RichEmbed()
    .setTitle("Magie niveau 2")
    .setColor(0xcc0099)
    .setDescription("Voici toute les attaque qu'un mage niveau 2 peu faire")
    .setFooter("Si vous avez un probleme demander de l'aide a un modo ou au autre")
    .addField("Commande magique",
      "m!eclair (-50PV) (utilisable 3 fois par match)\nm!vent (-5) (cumulable avec une autre attaque pour ajouter 5 dégâts voir plus)\nm!ice-axe : normal : 50 de dégâts. et à sec par une attaque ma!feu: 10 de dégâts \nm!slach (-15PV)\nm!implosion (-50PV) (utilisable 1 fois par combats)\nm!protection : défend de 25 de dégâts (mais si l'attaque fait plus tu es obligé de te faire toucher) (utilisable 3 fois par combats)")
      .addField("Nombre de PV",
      "200PV pour un mage niveau 2")

    message.channel.send({embed});
}
if (message.content === "m!help 3"){  

    const embed = new Discord.RichEmbed()
    .setTitle("Magie niveau 2")
    .setColor(0xcc0099)
    .setDescription("Voici toute les attaque qu'un mage niveau 3 peu faire")
    .setFooter("Si vous avez un probleme demander de l'aide a un modo ou au autre")
    .addField("Commande magique",
      "m!soin : soigne de 10 pv (à utiliser 3 fois par match)\nm!onde : fait 30 de dégâts\nm!sword : fait 75 de dégâts (à utiliser 3 fois par match)\nm!angel : fait s'envoler dans les airs pour esquiver un attaque qui se passe au sol ou qui est pas redirigable !\nm!dragon : fait 75 de dégâts (utilisable 3 fois par match)")
      .addField("Nombre de PV",
      "300PV pour un mage niveau 3")

    message.channel.send({embed});
}
if (message.content === "m!help 3"){  

    const embed = new Discord.RichEmbed()
    .setTitle("Magie niveau 3")
    .setColor(0xcc0099)
    .setDescription("Voici toute les attaque qu'un mage niveau 3 peu faire")
    .setFooter("derniere update : (jamais)")
    .addField("Commande magique",
      "m!soin : soigne de 10 pv (à utiliser 3 fois par match)\nm!onde : fait 30 de dégâts\nm!sword : fait 75 de dégâts (à utiliser 3 fois par match)\nm!angel : fait s'envoler dans les airs pour esquiver un attaque qui se passe au sol ou qui est pas redirigable !\nm!dragon : fait 75 de dégâts (utilisable 3 fois par match)")
      .addField("Nombre de PV",
      "300PV pour un mage niveau 3")

    message.channel.send({embed});
}
if (message.content === "m!fiche" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("voila les fiche éleve que je possède")
    .setAuthor("MagicBot")
    .setColor(0xcc0099)
    .setDescription("fiche!Yuki\nfiche!Lemres\nfiche!Sakamoto\nfiche!Haruka\nfiche!Haruka\nfiche!Shinon\nle reste et encore en cours ou reporter")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")

    message.channel.send({embed});
}
if (message.content === "fiche!Yuki" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Yuki Atsuki")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
    .addField("fiche dans la base de donnée",
    "Prénom: Yuki\nNom: Atsuki\nAge: 15 ans\nCaractère: froide mais peux devenir gentille. Elle ne demande qu'a la léser tranquille mais si on touche à ses amis on est sur d'y léser notre peau.\nElle aide ses amis au prit de sa vie elle et souvent triste lors des séparations.\nHistoire: Elle est née avec un don voir es aura des gens. Elle connais un jeune homme nommais Yuri Shiruba. Elle en tombe amoureuse mais le perd de vue et ne reçois des nouvelle que par son frère Otakashi qui lui annonce qu'il est plus en vie et jure de le venger mais elle le retrouve peux après mais ne le crois pas.\nElle vas peux à peux l'accepter et vas devenir amie avec Nova Subari et Shu.\nElle vivra éternellement et ne pourra pas trouver la pait éternel.\nPouvoir: Quand elle quel touche quelque chose ça ce transforme en glace et si elle ferme son poing ça se brise.")
    .addField("(suite a un grand nombre de charactere on dois faire sa :/)",
    "Peur: de perdre ses amis\nPoints faible: Les dispute et les séparation.\nPoints fort: Sa détermination et son courage.\nRace: Kitsune.\nClasse: Mage.\nArme: Un katana capable de tout tranché et en un coups peux infliger un poison.\nApparence: (image)")
    .setImage("https://cdn.discordapp.com/attachments/439460582345670666/439839983730294794/Avatar_RP2.png")
  
    message.channel.send({embed});
}
if (message.content === "fiche!Lemres" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Lemres")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField("fiche dans la base de donnée",
      "donnée introuvable")
      .setImage("https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/EGy7pjQwl/multicolor-video-with-text-error-404-not-found_skwt525re_thumbnail-small01.jpg")
  
    message.channel.send({embed});
}
if (message.content === "fiche!Sakamoto" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Sakamoto-san")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField("fiche dans la base de donnée",
      `konichiwa , je me nomme sakamoto-san , j'ai 15 année humaine (je vous épargne l'âge en année chat) je voudrais apprendre la magie pour l'apprendre\nrace : neko\nmagie mieux métriser : eau et vent\nvoila mon "apparence" :\n(et oui j'avais un petit creux)`)
      .addField("petite info qui vienne de lui",
      `personne ne saurais si il serai un chat ou un humain de base\nil ajoute aussi qu'il est rare de connaître des chose sur lui juste en demandant au autre\nseul les personne qui le connaisse vraiment peuvent connaître la vérité\nil ajoute aussi qu'il c'est déjà fais passer pour une autre personne a la perfection et change souvent apparence quand il le veux`)
      .setImage("https://cdn.discordapp.com/attachments/439460582345670666/440153290211065856/nichijou__sakamoto_san_gijinka_by_lightanddarksoul-d3k4h0m.jpg")
  
    message.channel.send({embed});
}
if (message.content === "fiche!Haruka" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Haruka Kurenai")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField(`fiche dans la base de donnée","Prénom :  Haruka. \nNom :  Kurenai. \nÂge :  16 ans. \nCaractère :  Solitaire, colérique, froide, hais les humains,  et très timide,  quand on la connais on peut voir se qu'elle ressent vraiment donc,  de la tristesse de la douce et de la gentillesse envers les personnes qu'elle apprécie.\n  Histoire :  A 5/6 ans toute la famille de Haruka mourut, des humains avaient mis le feu a sa maison pendant dans nuit criant " tuont le démon ! "  Haruka est la seule survivante,  elle fut recueillie par son oncle. En une soirée elle a perdue ses parents et son frere. Son oncle la inscrit dans cette établissement pensant qu'elle pourrait penser à autre en étant là-bas,  mais pour elle c'était juste un moyen pour qu'elle devienne plus forte.\n Physiquement :  Elle a deux apparences,  une ou on dirais une humaine et l'autre c'est sa vrai forme donc démoniaque (ui elle a une forme humaine)\n Race :  demon qui peut se transformer en corbeau. \nArme :  Une faux.\n  Apparence en image :`)
      .setImage("https://cdn.discordapp.com/attachments/439460582345670666/440225416389591040/Screenshot_20180429-161958.jpg")
  
    message.channel.send({embed});
}
if (message.content === "fiche!Shinon" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Shinon de Gun Gale Online")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField(`fiche dans la base de donnée","Bonjour à tous! Je m'appelle Shinon alias "Hécate" ( en référence au nom de mon arme "PGM Ultima Ratio Hécate Il" )j'ai 14ans et je viens tous droit du monde virtuel de Gun Gale Online. Dans ce jeux vidéo je suis un sniper de haut niveau, pendant que je promenant tranquillement quelqu'un ma interpeler une certaine Kirito (mais j'ai compris par la suite que c'était un garçon:sweat_smile:) et c'est là que tous à commencer pour moi. Plus tard Kirito ma inviter à jouer au monde de "ALO" mais je pense que je ne suis pas très fan! C'est pour ça que mon pseudo est "Shinon de Gun Gale Online". Ensuite j'ai entendu parler de ce serveur et je me suis dis que sa ne coûtait rien de faire un tour!:grin:`)
      .setImage("https://cdn.discordapp.com/attachments/439460582345670666/440264325324603393/image.gif")
  
    message.channel.send({embed});
}
if (message.content === "fiche!Shinon" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Shinon de Gun Gale Online")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField(`fiche dans la base de donnée","Bonjour à tous! Je m'appelle Shinon alias "Hécate" ( en référence au nom de mon arme "PGM Ultima Ratio Hécate Il" )j'ai 14ans et je viens tous droit du monde virtuel de Gun Gale Online. Dans ce jeux vidéo je suis un sniper de haut niveau, pendant que je promenant tranquillement quelqu'un ma interpeler une certaine Kirito (mais j'ai compris par la suite que c'était un garçon:sweat_smile:) et c'est là que tous à commencer pour moi. Plus tard Kirito ma inviter à jouer au monde de "ALO" mais je pense que je ne suis pas très fan! C'est pour ça que mon pseudo est "Shinon de Gun Gale Online". Ensuite j'ai entendu parler de ce serveur et je me suis dis que sa ne coûtait rien de faire un tour!:grin:`)
      .setImage("https://cdn.discordapp.com/attachments/439460582345670666/440264325324603393/image.gif")
  
    message.channel.send({embed});
}
if(message.content === "m!help"){

    const embed = new Discord.RichEmbed()
    .setTitle("test")
    .setColor(0xD4FE00)
    .setDescription("")
    .setFooter("Si vous avez un probleme... index.js ne répond pas")
    .addField("Commande magique",
      "bon... c'est un test ok ?")

    message.channel.send({embed});
}
}
)
