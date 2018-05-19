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
    .setDescription("fiche!Yuki\nfiche!Lemres\nfiche!Sakamoto\nfiche!Haruka\nfiche!Shinon\nfiche!Lilia\nfiche!Ilonna\nfiche!Maxime\nfiche!Sangwoo\nfiche!Minazuki\nfiche!Fire\nfiche!Arca\nfiche!BlackDown\nfiche!Naku\nfiche!NightPanda\nfiche!Tokyo\n(si il vous manque venez vous inscrire :3)")
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
       .addField("autre info sur lui",`G͐́ͭ̀ͬ͆̓ͬ̑ͪ̿̉̐̄̑̌ͩ̀҉̷̸̨̮̭͙ͅr̵̡̜͔̱͈̘̙̼̰ͪ̈́̄͒͒͆ͥ̿ͮͬͣ  ͣ̊̄̚̚͜͡ō̵̩͔͙͇̦̥̬̺̫̬ͭ̓ͧ̿ͦs̵̋̀̐ͤͧ͌̄ͮ̈́͋̌̓̉ͬ̍̽͏̨̛̺̘̼̱ ̮̺̥̠̻͖̭͚̩ͅͅͅP̵̷̡̨̬̖̳͓̫̜̙͚̱̻̖͖̫̩͗̑ͭͮ͗̇͌̑͊̌ọ̴̢̭͔͚͕  ͤ̒̿ͧͮ̽͌̋҉͕̟̘̭̬̞̩́͢͠a͐̌̎̽ͫ̒̉͛̅̓̍͗ͥͮͣ͞͏̸̣͉̺͍̖͝ͅy̴̡̧̙͚̤̝̟̗͎̿ͥ͆̇̋ͬͯͫ̇ G͐́ͭ̀ͬ͆̓ͬ̑ͪ̿̉̐̄̑̌ͩ̀҉̷̸̨̮̭͙ͅr̵̡̜͔̱͈̘̙̼̰ͪ̈́̄͒͒͆ͥ̿ͮͬͣ ͣ̊̄̚̚͜͡`)


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
          .addField("fiche dans la base de donnée",`Prénom :  Haruka. \nNom :  Kurenai. \nÂge :  16 ans. \nCaractère :  Solitaire, colérique, froide, hais les humains,  et très timide,  quand on la connais on peut voir se qu'elle ressent vraiment donc,  de la tristesse de la douce et de la gentillesse envers les personnes qu'elle apprécie.\n  Histoire :  A 5/6 ans toute la famille de Haruka mourut, des humains avaient mis le feu a sa maison pendant dans nuit criant " tuont le démon ! "  Haruka est la seule survivante,  elle fut recueillie par son oncle. En une soirée elle a perdue ses parents et son frere. Son oncle la inscrit dans cette établissement pensant qu'elle pourrait penser à autre en étant là-bas,  mais pour elle c'était juste un moyen pour qu'elle devienne plus forte.\n Physiquement :  Elle a deux apparences,  une ou on dirais une humaine et l'autre c'est sa vrai forme donc démoniaque (ui elle a une forme humaine)\n Race :  demon qui peut se transformer en corbeau. \nArme :  Une faux.\n  Apparence en image :`)
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
          .addField("fiche dans la base de donnée",`Bonjour à tous! Je m'appelle Shinon alias "Hécate" ( en référence au nom de mon arme "PGM Ultima Ratio Hécate Il" )j'ai 14ans et je viens tous droit du monde virtuel de Gun Gale Online. Dans ce jeux vidéo je suis un sniper de haut niveau, pendant que je promenant tranquillement quelqu'un ma interpeler une certaine Kirito (mais j'ai compris par la suite que c'était un garçon:sweat_smile:) et c'est là que tous à commencer pour moi. Plus tard Kirito ma inviter à jouer au monde de "ALO" mais je pense que je ne suis pas très fan! C'est pour ça que mon pseudo est "Shinon de Gun Gale Online". Ensuite j'ai entendu parler de ce serveur et je me suis dis que sa ne coûtait rien de faire un tour!:grin:`)
      .setImage("https://cdn.discordapp.com/attachments/439460582345670666/440264325324603393/image.gif")
  
    message.channel.send({embed});
}
if (message.content === "fiche!Lilia" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Lilia Shinata")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField("fiche dans la base de donnée",`* Prénom : Lilia\n* Nom : Shinata\n* Âge : 14 ans\n * Caractère : Elle peut passer de la fille la plus conne du monde à la plus grande psychopathe. Elle se fait vite remarquer à cause de sa grande gueule mais peut vite devenir discrète et presque invisible aux yeux de tous. Avec son tempérament colérique, elle passe son temps à se battre pour n'importe quelle raison. Elle adore voir les gens souffrire mais quand il s'agit d'un de ses proches, elle peut devenir votre pire cauchemar.\n* Histoire : Lilia vit dans une forêt et reçois souvent la visite de son meilleur ami d'enfance Fire, dont elle est amoureuse , ils recueillent des loups souffrants. Jusque là, rien de bien choquant. Mais au fur et à mesure que Fire lui fais découvrire ce qui s'appelle "vie sociale" et Lilia se faisant harceler commence à se mutiler. 3mois après le dernier de sa famille (Son frère) disparaît laissant à sa soeur comme seule conseil de se battre pour vivre. Depuis à chaque manque de respect, envers elle ou sa famille, elle se bat se qui reveille sa vraie nature ^^`)
  
    message.channel.send({embed});
}
if (message.content === "fiche!Ilonna" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Ilonna Yamazaki")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
    .addField("fiche dans la base de donnée","* Prénom : Ilonna\n* Âge : 13\n* Nom :  Yamazaki\n* Pouvoir : Quand elle touche quelqu'un et qu'elle utilise ses pouvoirs la personne est en feu.\n* Caractère : psychopate et folle,aime le sang.\n* Élément : flammes\n* Classe : Mage.\n* Arme : Katana\n* Apparence : (image)")
        .setImage("https://cdn.discordapp.com/attachments/439460582345670666/440802664108916736/2Q.png")
  
    message.channel.send({embed});
}
if (message.content === "fiche!Maxime" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Maxime Sword")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField("fiche dans la base de donnée","BONJOUR JE M'APPELE MAXIME\nJe suis plutôt enthousiasme , j'aime faire des blagues (defois nul) . Je suis le comique de service mais je suis très attentif .  J'ai 15 ans je suis plutôt de taille normale , j'aime bien être bien sapé comme jamais ... Mon pouvoir est ancestrale Lucas tu connais je crache des projectiles, mais aussi je rêverais d'être Irons Man ...  Je pense que ma classe serai JE SUIS SURPUISSANT HAHAHAHAHAHAAHHA... NON JE RIGOLE je pense être un plutôt bonne élève et mon arme serai attention tain tain !!! Une baguette chinoise pour manger les nouilles")
  
    message.channel.send({embed});
}
if (message.content === "fiche!Sangwoo" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Sangwoo")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField("fiche dans la base de donnée","* Prénom : Sangwoo\n* Nom : Oh\n* Âge : 19\n* Caractère :  Il adopte un visage «joyeux, énergique» et se montre souvent souriant, même lorsqu'il fait un contact visuel avec des étrangers dans un environnement social. Ces traits masquent cependant ses caractéristiques plus psychopathiques et sadiques. Ses émotions, face à ses victimes, alternent de façon imprévisible entre la miséricorde et l'hostilité violente qui est en quelque sorte causée par sa personnalité narcissique merdique. C'est le meilleur ami de Lilia Shinata.\n* Apparence :")
      .setImage("https://cdn.discordapp.com/attachments/439460582345670666/440807911334346763/tumblr_or28o9ZSaw1w1266zo1_1280.jpg")
  
    message.channel.send({embed});
}
if (message.content === "fiche!Minazuki" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Minazuki")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField("fiche dans la base de donnée","Nom:Bloody\nPrénom: Minazuki\nSexe: féminin\nAge: 16ans\nPhysique: plutot grande, fine,calme et blonde\nRace: Humain\nÉlément: L'eau et ses variantes (glace, vapeur, etc)")
  
    message.channel.send({embed});
}
if (message.content === "fiche!Fire" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Fire Monkestra")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField("fiche dans la base de donnée","fiche!fire\nFire Monkestra\nNom:Monkestra\nPrénom :Fire\nAge:15 ans\n Animal:Un loup\nÉlément:Feu \nArme:Machette,le feu,la magie et des invocations \nCaractère : plus il tuer de gens son vrai visage apparaît et si on s’en prend a Lilia il pète un câble.Lilia est sont amie d'enfance.")
      .setImage("https://cdn.discordapp.com/attachments/439460582345670666/441208223442272277/jpg.jpg")
  
    message.channel.send({embed});
}
if (message.content === "fiche!Arca" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Arca")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField("fiche dans la base de donnée",
      "donnée introuvable")
      .setImage("https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/EGy7pjQwl/multicolor-video-with-text-error-404-not-found_skwt525re_thumbnail-small01.jpg")
  
    message.channel.send({embed});
}
if (message.content === "fiche!BlackDown" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de BlackDown")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField("fiche dans la base de donnée","BlackDown\nNom : Black\nPrénom : Down\nÂge : 14 ans\nPhysique : Grand, musclé, blond et j'aime dormir. J'ai pas mal de poils sur le corps et je suis assez fainéant.\nAnimal : Koala\nRace : Lycian\nElement : Terre + feu")
  
    message.channel.send({embed});
}
if (message.content === "fiche!Naku" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Naku")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField("fiche dans la base de donnée","bonjour\nje voudrait entre dans cette merveilleuse ecole\nnom: Gamer\nprenom:Léo\nSurnom: naku\nAge :15\nphisique :grand fin\nentrainement :ninja\nélément : raiton katon\ntechnique: manipulation des ombres rouges (manipulation des ombres + kaleidoskope)\naime : les blague quand t il le faut et le serieux quand il le faut aussi .\nMerci\nCordialement\nLéogamer (ou Naku)")
  
    message.channel.send({embed});
}
if (message.content === "fiche!NightPanda" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de NightPanda")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField("fiche dans la base de donnée","Bonsoir!!!!!!!!!!!!!!!\nNom:Jsp\nNom:Lucas\nSurnom:Cancer\nAge:13\nphisique:normale et jsp")
  
    message.channel.send({embed});
}
if (message.content === "fiche!Tokyo" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Fiche d'inscription")
    .setAuthor("MagicBot")
    .setColor(0x0086AE)
    .setDescription("fiche d'inscription de Tokyo GZtail")
    .setFooter("un probleme ? demander a Sakamoto-san ou a Lemres")
          .addField("fiche dans la base de donnée","Bonjour\nNom : Tokyo\nNom de famille : GZtail \nSurmon: Kaneki \nAge : 13 \nPhisique : resenble à epic Sans")
  
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
