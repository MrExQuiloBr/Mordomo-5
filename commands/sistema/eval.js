module.exports = [{
  name: "eval",
  code: `
  $eval[$message]
  $onlyForIDs[1171963692984844401;**❌ | você não tem autorização de usar esse comando! | ❌**]
  $deleteCommand`
},{
  name: "evalpublic",
  aliases: ['evalp', 'evp'],
  $if: "old",
  code: `
  $if[$message[1]==sum]
  $writeFile[./mydatabase/logs/eval.txt;O moderador <@$authorID> aumentou **$message[2]** da variável **$message[3]** do id **$message[4]**, [<@$message[4]>] / / type: sum
  $readFile[./mydatabase/logs/eval.txt]]
    $title[📝 | Eval | 📝]
    $description[O moderador <@$authorID> aumentou **$message[2]** da variável **$message[3]** do id **$message[4]**, [<@$message[4]>]]
    $color[#ff64e0]
    $thumbnail[$authorAvatar]
    $author[$username;$authorAvatar]
    $footer[Comando Administrativo]
    $setGlobalUserVar[$message[3];$sum[$getGlobalUserVar[$message[3]];$message[2]];$message[4]]
    $channelSendMessage[$get[channel];{newEmbed:{title:📝 | Eval | 📝}{description:O moderador <@$authorID> aumentou **$message[2]** da variável **$message[3]** do id **$message[4]**, [<@$message[4]>]}{color:ff64e0}{thumbnail:$authorAvatar}{author:$username:$authorAvatar}{footer:Comando Administrativo}};false]
  $endif
  $if[$message[1]==sub]
  $writeFile[./mydatabase/logs/eval.txt;O moderador <@$authorID> retirou **$message[2]** da variável **$message[3]** do id **$message[4]**, [<@$message[4]>] / / type: sum
  $readFile[./mydatabase/logs/eval.txt]]
    $title[📝 | Eval | 📝]
    $description[O moderador <@$authorID> retirou **$message[2]** da variável **$message[3]** do id **$message[4]**, [<@$message[4]>]]
    $color[#ff64e0]
    $thumbnail[$authorAvatar]
    $author[$username;$authorAvatar]
    $footer[Comando Administrativo]
    $setGlobalUserVar[$message[3];$sub[$getGlobalUserVar[$message[3]];$message[2]];$message[4]]
    $channelSendMessage[$get[channel];{newEmbed:{title:📝 | Eval | 📝}{description:O moderador <@$authorID> retirou **$message[2]** da variável **$message[3]** do id **$message[4]**, [<@$message[4]>]}{color:ff64e0}{thumbnail:$authorAvatar}{author:$username:$authorAvatar}{footer:Comando Administrativo}};false]
  $endif
  $if[$message[1]==set]
  $writeFile[./mydatabase/logs/eval.txt;O moderador <@$authorID> colocou **$message[2]** da variável **$message[3]** do id **$message[4]**, [<@$message[4]>] / / type: sum
  $readFile[./mydatabase/logs/eval.txt]]
    $title[📝 | Eval | 📝]
    $description[O moderador <@$authorID> colocou **$message[2]** da variável **$message[3]** do id **$message[4]**, [<@$message[4]>]]
    $color[#ff64e0]
    $thumbnail[$authorAvatar]
    $author[$username;$authorAvatar]
    $footer[Comando Administrativo]
    $setGlobalUserVar[$message[3];$message[2];$message[4]]
    $channelSendMessage[$get[channel];{newEmbed:{title:📝 | Eval | 📝}{description:O moderador <@$authorID> colocou **$message[2]** da variável **$message[3]** do id **$message[4]**, [<@$message[4]>]}{color:ff64e0}{thumbnail:$authorAvatar}{author:$username:$authorAvatar}{footer:Comando Administrativo}};false]
  $endif
  $if[$message[1]==]
  $writeFile[./mydatabase/logs/eval.txt;$message
  $readFile[./mydatabase/logs/eval.txt]]
    $title[📝 | Eval | 📝]
    $description[$message]
    $color[#ff64e0]
    $thumbnail[$authorAvatar]
    $author[$username;$authorAvatar]
    $footer[Comando Administrativo]
    $channelSendMessage[$get[channel];{newEmbed:{title:📝 | Eval | 📝}{description:$message}{color:ff64e0}{thumbnail:$authorAvatar}{author:$username:$authorAvatar}{footer:Comando Administrativo}};false]
  $endif
  $let[channel;1292196930440396851]
  $onlyForIDs[1171963692984844401;**❌ | você não tem autorização de usar esse comando! | ❌**]
  $deleteCommand`
}]