module.exports = [{
  name: "viagem",
  $if: "old",
  code: `
  $setGlobalUserVar[minigame;$random[1;2]]
  $eval[$splitText[1]]
  $texSplit[$readFile[./mydatabase/minigames/viagem/minigame$random[1;2]];,,]
  $onlyIf[$getGlobalUserVar[emviagem;$authorID]==true;❌ | você não está em uma viagem!]
  `
},{
  // b1
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
  $deleteCommand
  $eval[$splitText[2]]
  $textSplit[$readFile[./mydatabase/minigames/viagem/minigame$getGlobalUserVar[minigame]];,,,]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==MN1;]
  `
}]