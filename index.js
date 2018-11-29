const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)

    bot.user.setActivity("!doda_vpn", { type: "PLAYING" });

});


bot.on("message", async message => {

    // als bot bericht stuurt stuur dan return
    if (message.author.bot) return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    if (command === `${prefix}hallo`) {

        return message.channel.send("Hallo");

    }

    if (command === `${prefix}info`) {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.RichEmbed()
            .setDescription("discord bot info")
            .setColor("#f70d04")
            .setThumbnail(botIcon)
            .addField("bot naam", bot.user.username)
            .addField("gemaakt op", bot.user.createdAt);

        return message.channel.send(botEmbed);

    }

    if (command === `${prefix}serverinfo`) {

        var icon = message.guild.iconURL;

        var serverEmbed = new discord.RichEmbed()
            .setDescription("server info")
            .setColor("#f70d04")
            .setThumbnail(icon)
            .addField("bot naam", bot.user.username)
            .addField("gejoind op", message.member.joinedAt)
            .addField("totaal members", message.guild.memberCount);

        return message.channel.send(serverEmbed);

    }

});


bot.login(botConfig.token);