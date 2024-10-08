module.exports = [{
  name: "$alwaysExecute",
  code: `
  <@$authorID>
  $title[📬 | Correios | 📬]
  $description[<@$authorID> você tem uma notificação não lida! use \`m.not\` ou \`m.correio\` para ver as notificações!]
  $thumbnail[$authorAvatar]
  $author[$username;$authorAvatar]
  $color[#ff64e0]
  $setGlobalUserVar[msgcorr;0;$authorID]
  $onlyIf[$getGlobalUserVar[msgcorr]>=60;]
  $onlyIf[$getGlobalUserVar[conta;$authorID]!=x;]
  $onlyIf[$getGlobalUserVar[leucorr]==false;]`
}]