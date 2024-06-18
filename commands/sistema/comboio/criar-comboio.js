module.exports = [{
  name: "criar-comboio",
  aliases: ['criar comboio'],
  code: `
  $title[🚛 | Criador de Comboios | 🚛]
  $description[🔧 | Escreva no chat informações do comboio, separando por **VÍRGULA**,
  📃 | Explicação: **Nome do comboio, Mapa do comboio, players do comboio(de 2 até 8), [opcional: senha do comboio, mods do comboio]**]
  $color[#ffffff]
  $awaitMessages[$channelID;$authorID;1m;everything;ccomboio;❌ | a ação foi cancelada! você demorou demais para responder e para recomeçar digite o comando outra vez!]
  `
},{
  name: "ccomboio",
  type: "awaited",
  code: `
  $title[🚛 | Criador de Comboios | 🚛]
  $description[Condições aplicadas com sucesso! seu pedido foi enviado pro chat, e pessoas interessadas podem ingressar, pedido diretamente ou indiretamente a você.]
  $channelSendMessage[1241881717523087410;{newEmbed:{title:🟢 | COMBOIO DE $toLocaleUpperCase[$username] | 🟢}{description:**🚛 | dono do comboio:** $username
  **🔤 | nome do comboio:** $splitText[1]
  **🗺️ Mapa:** $splitText[2]
  **👥 | players:** $splitText[3]
  **🔒 | senha:** $if[$splitText[4]==;não tem;||$splitText[4]||]
  $if[$splitText[5]==;;**🔧 | Mods:** $splitText[5]]}{color:ffffff}{thumbnail:$authorAvatar}{footer:©️ O comboio será desligado automaticamente após 1 hora e 30!}};false]
  $onlyIf[$getTextSplitLength>=3;❌ | você não digitou todas as informações do comboio!]
  $onlyIf[$splitText[3]<=8;❌ | você não pode ter mais de 8 players no comboio!]
  $textSplit[$message;,]
  `
}]