module.exports = [{
  name: "buildnot",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{title:$slashOption[título]}{description:$slashOption[descrição]}{color:$slashOption[cor]}{author:essa é sua notificação!}}]
  id: $sum[$getVar[cartas];1]
  $writeFile[./mydatabase/correios/$sum[$getVar[cartas];1].json;{
  "title": "$slashOption[título]",
  "description": "$slashOption[descrição]",
  "color": "$slashOption[cor]",
  }]
  $setVar[cartas;$sum[$getVar[cartas];1]]
  $onlyForIDs[1171963692984844401;**❌ | você não tem autorização de usar esse comando! | ❌**]`
}]