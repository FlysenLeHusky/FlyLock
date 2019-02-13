const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ";";

client.login('NTQ1MjE4NzgyNzE3ODA0NTQ1.D0WeOw.oy_MO9e8TFjkRplo0w22DoWvjTI');

client.on('message', message =>{
    if(message.content === "help"){
        message.channel.sendMessage('Contacter un Assistant Modérateur ou autre ou sinon aller dans le channel spécifique et attender et si personne est là, ecriver dans le channel #aide votre aide et on vous répondras quan un membre du STAFF sera connecter :heart:');
        console.log('répond à tfq');
    }
});

client.on('guildMemberAdd', member =>{
    member.guild.channels.get('544102723210051635').send(':tada: **Bienvenue** ' + member.user + ':smile: Nous sommes ' + member.guild.memberCount);
    console.log('+1 Personne sur le serveur Flysen Server !')
    member.addRole('544104451196190720') 

});

client.on('guildMemberRemove', member =>{
    member.guild.channels.get('544102723210051635').send(':cry: **Aurevoir** ' + member.user + ':sob: Nous sommes Triste de te perdre ! ');
    console.log('-1 Personne sur le serveur Flysen Server !')
});

/*Kick*/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utilisez cette commande ;(")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionnez un utilisateur :x:")
        if (member.highestRole.calculatedPosition >= message.member.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
        if (!member.kickable) return message.channel.send("Je ne peux pas exlure cet utilisateur :sunglass:")
        member.kick()
        message.channel.send(member.user.username + 'a été exclu :white_check_mark:')
    }
});

/*Ban*/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utilisez cette commande ;(")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionnez un utilisateur :x:")
        if (member.highestRole.calculatedPosition >= message.member.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas Ban cet utilisateur :x:")
        if (!member.kickable) return message.channel.send("Je ne peux pas Bannir cet utilisateur :sunglass:")
        member.guild.ban(member, {days: 7})
        message.channel.send(member.user.username + 'a été banni :white_check_mark:')
    }
});
