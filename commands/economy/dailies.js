const { Command } = require("../../Nitro");

class DailiesCommand extends Command {
    async run({ message, bot, reply, t }) {
        /*const commands = bot.commands;
        const groups = bot.CommandLoader.groups;
        const requesterID = message.author.id;
        const doleAmount = 100;
        const bank = new Bank(message.author);
        //var transactions = await message.author.transactions();
        //balance = balance + doleAmount;
        const embed = bot.embed
            .setTitle(":atm: "+message.member.nickname+" :atm:")
            .nitroColor()
        //transactions.push({"amount":doleAmount,"reason":"Dailies","transactAccount":0,"timestamp":Date.now()})
        await bank.credit(doleAmount);
        var balance = await bank.balance();
        embed.addField("Here's a free "+doleAmount.toFixed(2)+" "+CUR.code, "New Balance: "+balance.toFixed(2)+" :dollar:");
        //await message.author.balance(balance);
        //await message.author.transactions(transactions);
        return await reply(embed);*/

        return reply("You can vote at blah every 24 hours to recieve daily rewards.");
    }

    help = "Free Money";
    usage = "{}dailies";
    dm = false;
    alias = ["dole"];
}

module.exports = DailiesCommand;
