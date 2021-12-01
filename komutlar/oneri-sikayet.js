
const Discord = require('discord.js')

exports.run = (client, message, args) => {
    if(args[0] === "şikayet"){
        let lrowsikayet = args.slice(1).join(' ');
        let channel = message.guild.channels.cache.filter((channel) => channel.type === "text").first();

        channel.createInvite().then(lrowsinvite => {
            if(!lrowsikayet){
                const lrows = new Discord.MessageEmbed()
                .setDescription(`**Şikayetinizi belirtin**`)
                .setColor('RED')
                return message.channel.send(lrows)
            } else {
                const lrows = new Discord.MessageEmbed()
                .setDescription(`**Şikayetiniz yetkili ekibe iletild.**`)
                .setColor('GREEN')
                message.channel.send(lrows)
    
                client.channels.cache.get('914147018115539014').send(new Discord.MessageEmbed().setDescription(`${message.author} İsimli Kişinin Şikayeti **${lrowsikayet}**`).setColor('YELLOW').setFooter('Wenzy'))
            }
        })
    }

    if(args[0] === "öneri"){
        let lrowsoneri = args.slice(1).join(' ');
        let channel = message.guild.channels.cache.filter((channel) => channel.type === "text").first();

        channel.createInvite().then(lrowsinvite => {
            if(!lrowsoneri){
                const lrows = new Discord.MessageEmbed()
                .setDescription(`**Önerinizi belirtin**`)
                .setColor('RED')
                return message.channel.send(lrows)
            } else {
                const lrows = new Discord.MessageEmbed()
                .setDescription(`**Öneriniz yetkili ekibe iletildi**`)
                .setColor('GREEN')
                message.channel.send(lrows)
    
                client.channels.cache.get('914147003519352872').send(new Discord.MessageEmbed().setDescription(`${message.author} İsimli Kişinin Önerisi **${lrowsoneri}**`).setColor('BLUE').setFooter('Wenzy'))
            }
        })
    }
    if(args[0] === "bug"){
        let lrowsbug = args.slice(1).join(' ');
        let channel = message.guild.channels.cache.filter((channel) => channel.type === "text").first();

        channel.createInvite().then(lrowsinvite => {
            if(!lrowsbug){
                const lrows = new Discord.MessageEmbed()
                .setDescription(`**Yaşadığınız bugu belirtin**`)
                .setColor('RED')
                return message.channel.send(lrows)
            } else {
                const lrows = new Discord.MessageEmbed()
                .setDescription(`**Bug bildirisi başarıyla yetkili ekibine iletildi**`)
                .setColor('GREEN')
                message.channel.send(lrows)
    
                client.channels.cache.get('914147025552031754').send(new Discord.MessageEmbed().setDescription(`${message.author} İsimli Kişinin Bug Bildirisi **${lrowsbug}**`).setColor('RED').setFooter('Wenzy'))
            }
        })
    }
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['Bildir','BİLDİR'],
permLevel: 0
}

exports.help = {
name: 'bildir'
}
