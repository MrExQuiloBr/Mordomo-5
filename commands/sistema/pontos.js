module.exports = [{
  name: "$alwaysExecute",
  code: `$setGlobalUserVar[pontos;$sum[$getGlobalUserVar[pontos;$authorID];$random[0;17]];$authorID]
  $setGlobalUserVar[msgcorr;$sum[$getGlobalUserVar[msgcorr;$authorID];1];$authorID]
  $cooldown[7s;]
  $onlyIf[$getGlobalUserVar[conta;$authorID]!=x;]`
}]