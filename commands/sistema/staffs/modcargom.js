module.exports = [{
  name: "$alwaysExecute",
  code: `
  $title[👮 | Moderação | 👮]
  $description[## **BirdTool**:
  > Cargo: <@&1289580830599151727>,<@&1289581706806038594>
  > Classificação: $if[$getVar[birdafk]==true;$getVar[birdclass];desligado]
  ## **Samurairj**:
  > Cargo: <@&1289580830599151727>,<@&1289581974473801750>
  > Classificação: Inexistente
  ## **Sérgio**:
  > Cargo: <@&1289580830599151727>,<@&1289581974473801750>
  > Classificação: Inexistente
  ## **DarkCoffee**:
  > Cargo: <@&1289581522827083867>, <@&1289582195769606184>
  > Classificação: Inexistente]
  $color[#ff64e0]
  $onlyIf[$checkContains[$message;<@&1241354788608671744>;<@&1241354534622597130>;<@&1251335726012829766>;<@&1241354323368083607>;<@&1256683338975019018>]==true;]
  `
}]