module.exports = [{
  name: "viagem",
  aliases: ['progresso'],
  $if: "old",
  code: ` 
  $if[$getGlobalUserVar[emviagem;$authorID]==normal]
  $title[🚛 | Viagem | 🚛]
  $description[teste]
  $let[page;$getGlobalUserVar[viagem;$authorID]]
  $endif
  $onlyIf[$advancedTextSplit[$getGlobalUserVar[tempoviagem;$authorID];/;1]>=$hour;❌ | você ainda não terminou a viagem!]
  $onlyIf[$advancedTextSplit[$getGlobalUserVar[tempoviagem;$authorID];/;2]>=$minute;❌ | você ainda não terminou a viagem!]
  $onlyIf[$getGlobalUserVar[emviagem;$authorID]==true;❌ | você não está em uma viagem!]
  `
}]