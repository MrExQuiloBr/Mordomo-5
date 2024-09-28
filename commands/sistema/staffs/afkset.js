module.exports = [{
  name: "afkset",
  $if: "old",
  code: `
  $if[$authorID==1171963692984844401]
  $title[💤 | AFK | 💤]
  $description[você está afk pelo seguinte motivo: \`$getVar[birdreasson]\`
**Classificação**: $getVar[birdclass]
**sistema**: $getVar[birdafk]]
  $endif
  $addButton[1;T : Motivo;primary;motstaff;false]
  $addButton[1;T : Classificação;primary;classstaff0;false]
  $addButton[1;T : Sistema on/off;primary;afkonoff;false]
  $color[#ff64e0]
  $onlyIf[$channelID==1241346590602428566;-# você não pode usar esse comando nesse canal! use em: <#1241346590602428566>]
  $onlyForIDs[1171963692984844401;-# Você não é autorizado a usar esse comando.]`
},{
  name: "motstaff",
  type: "interaction",
  prototype: "button",
  code: `
  escreva qual o motivo do afk
  $awaitMessages[$channelID;$authorID;60s;everything;1motstaff;❌ | a ação foi cancelada! você demorou demais para responder e para recomeçar digite o comando outra vez!]
  `
},{
  name: "classstaff0",
  type: "interaction",
  prototype: "button",
  code: `
  escreva no chat a classificação
  $awaitMessages[$channelID;$authorID;60s;everything;1classstaff;❌ | a ação foi cancelada! você demorou demais para responder e para recomeçar digite o comando outra vez!]
  `
},{
  name: "1motstaff",
  type: "awaited",
  $if: "old",
  code: `
  $if[$authorID==1171963692984844401]
  O seu motivo de afk foi setado para: \`$message\`
  $setVar[birdreasson;$message]
  $endif
  `
},{
  name: "1classstaff",
  type: "awaited",
  $if: "old",
  code: `
  $if[$authorID==1171963692984844401]
  Sua classificação foi setada para: $message
  $setVar[birdclass;$message]
  $endif
  `
},{
  name: "afkonoff",
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
  $if[$authorID==1171963692984844401]
    $if[$getVar[birdafk]==false]
      sistema ligado.
      $setVar[birdafk;true]
    $else
      sistema desligado.
      $setVar[birdafk;false]
    $endif
  $endif
  `
}]