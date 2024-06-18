module.exports = [{
  name: "$alwaysExecute",
  code: `$setGlobalUserVar[pontos;$sum[$getGlobalUserVar[pontos;$authorID];$random[0;17]];$authorID]
  $cooldown[7s;]
  $onlyIf[$getGlobalUserVar[conta;$authorID]!=x;]`
}]