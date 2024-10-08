module.exports = [{
  name: "notall",
  code: `
  $writeFile[./mydatabase/logs/eval.txt;O moderador <@$authorID> notificou todos do server!
  $readFile[./mydatabase/logs/eval.txt]]
  $channelSendMessage[1292196930440396851;{newEmbed:{title:📬 | Eval | 📬}{description:O moderador <@$authorID> notificou todos do server!}{thumbnail:$authorAvatar}{author:$username:$authorAvatar}{footer:Comando Administrativo}{color:#ff64e0}}]
  $forEachUser[1;{"id": "$message[1]","owner": "$authorID"};returnUsers;]
  $onlyIf[$isNumber[$message[1]]==true;❌ | Você não colocou um id válido!]
  $onlyForIDs[1171963692984844401;**❌ | você não tem autorização de usar esse comando! | ❌**]`
},{
  name: "returnUsers",
  type: "awaited",
  code: `
  $readFile[./mydatabase/logs/eval.txt]]
  $title[📬 | Eval | 📬 ]
  $description[O moderador: <@$awaitData[owner]> notificou <@$authorID>]
  $color[#ff64e0]
  $thumbnail[$authorAvatar]
  $author[$username;$authorAvatar]
  $footer[Comando Administrativo]
  $setGlobalUserVar[correios;$awaitData[id]/$getGlobalUserVar[correios;$authorID];$authorID]
  $useChannel[1292196930440396851]
  `
}] 