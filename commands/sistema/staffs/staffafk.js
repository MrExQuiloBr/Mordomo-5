module.exports = [{
  name: "$alwaysExecute",
  $if: "old",
  code: `
  $if[$checkContains[$message;<@1171963692984844401>;<@!1171963692984844401>]==true]
  $title[<:Staff:1289269664781828196> | BirdTool | <:Staff:1289269664781828196>]
  $description[<@1171963692984844401> está afk pelo seguinte motivo: \`$getVar[birdreasson]\`
**Classificação:** $getVar[birdclass] [Clique aqui pra saber mais](https://discord.com/channels/1241184486385913866/1241345681998876783/1289277864285438032)]
$color[#ff64e0]
$thumbnail[$userAvatar[1171963692984844401]]
$onlyIf[$getVar[birdafk]==true;]
$endif
  `
}]