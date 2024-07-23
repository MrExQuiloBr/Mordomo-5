module.exports = [{
  name: "daily",
  aliases: ["diario"],
  $if: "old",
  code: `
  $if[$or[$math[0.4*$getGlobalUserVar[tentativas]*$random[2;15]]>=8;$and[$randomText[Man;Volvo;Ford;Scania;Iveco;Daf;Mercedes-Benz;Renault]==$randomText[Daf;Man;Volvo;Scania;Iveco;Mercedes-Benz;Renault;Ford];$randomText[Man;Volvo;Ford;Scania;Iveco;Daf;Mercedes-Benz;Renault]==$randomText[Man;Volvo;Iveco;Daf;Mercedes-Benz;Renault;Scania;Ford]]==true]==true]
  $title[💵 | Daily | 💵]
  $description[## | $get[roll1] | $get[roll1] | $get[roll1] |
  🎉 | Parabéns! Você ganhou **$numberSeparator[$random[1000;4000]]** Reais!💵 e **$numberSeparator[$round[$math[$random[1000;4000]*2.23]]]** pontos! | 🎉]
  $color[#8bce6a]
  $footer[Daily | $username;$authorAvatar]
  $setGlobalUserVar[tentativas;0]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[1000;4000]]]
  $setGlobalUserVar[pontos;$sum[$getGlobalUserVar[pontos];$round[$math[$random[1000;4000]*2.23]]]]
  $else
  $title[💵 | Daily | 💵]
  $description[## | $get[roll1] | $get[roll2] | $get[roll3] |
  🏛️ | Você não acertou todos 😔 mas você ganhou: **$random[0;500]** Reais💵 e **$numberSeparator[$round[$math[$random[0;500]*2.23]]]** pontos! | 🏛]
  $color[#bd5cd6]
  $footer[Daily | $username;$authorAvatar]
  $setGlobalUserVar[tentativas;$sum[$getGlobalUserVar[tentativas];1]]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[0;500]]]
  $setGlobalUserVar[pontos;$sum[$getGlobalUserVar[pontos];$round[$math[$random[0;500]*2.23]]]]
  $endif
  $if[$math[0.4*$getGlobalUserVar[tentativas]*$random[2;15]]>=8]
  $deleteMessage[$get[m2];$channelID]
  $wait[2s]
  $let[m2;$sendMessage[{newEmbed:{title:💵 | Daily | 💵}{description:## | $get[roll1] | $get[roll1] | \`xxxxxx\` |}{color:bd5cd6}};true]]
  $deleteMessage[$get[m1];$channelID]
  $wait[2s]
  $let[m1;$sendMessage[{newEmbed:{title:💵 | Daily | 💵}{description:## | $get[roll1] | \`xxxxxx\` | \`xxxxxx\` |}{color:bd5cd6}};true]]
  $else
  $deleteMessage[$get[m2];$channelID]
  $wait[2s]
  $let[m2;$sendMessage[{newEmbed:{title:💵 | Daily | 💵}{description:## | $get[roll1] | $get[roll2] | \`xxxxxx\` |}{color:bd5cd6}};true]]
  $deleteMessage[$get[m1];$channelID]
  $wait[2s]
  $let[m1;$sendMessage[{newEmbed:{title:💵 | Daily | 💵}{description:## | $get[roll1] | \`xxxxxx\` | \`xxxxxx\` |}{color:bd5cd6}};true]]
  $endif
  $let[roll3;$randomText[Man;Volvo;Iveco;Daf;Mercedes-Benz;Renault;Scania;Ford]]
  $let[roll2;$randomText[Daf;Man;Volvo;Scania;Iveco;Mercedes-Benz;Renault;Ford]]
  $let[roll1;$randomText[Man;Volvo;Ford;Scania;Iveco;Daf;Mercedes-Benz;Renault]]
  $cooldown[1d;⏰ | <@$authorID>, Você já pegou seu daily hoje! Volte amanhã!]
  `
}]