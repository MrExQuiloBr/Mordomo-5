module.exports = [{
  name: "notficacoes",
  aliases: ['not', 'notficações', 'notificações', 'notficacões', 'notificacões', 'notficaçoes', 'notificacões', 'correio', 'correios'],
  $if: "old",
  code: `
  $author[$username;$userAvatar]
  $title[📬 | Notificações | 📬 ]
  $description[## $getObjectProperty[$splitText[1];title]
  
  $getObjectProperty[$splitText[1];description]]
  $color[$getObjectProperty[$splitText[1];color]]
  $footer[Notficação: $getGlobalUserVar[pagecorr] id: $splitText[1]]
  $thumbnail[$authorAvatar]
  $addButton[1;;primary;CORA_$authorID;false;▶️]
  $addButton[1;;primary;CORV_$authorID;false;◀️]
  $setGlobalUserVar[leucorr;true]
  $createObject[$splitText[1];$readFile[./mydatabase/correios/$splitText[1].json]]
  $textSplit[$getGlobalUserVar[correios];/]
  $setGlobalUserVar[pagecorr;1]
  `
},{
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
  $deletecommand
  $author[$username;$userAvatar]
  $title[📬 | Notificações | 📬 ]
  $description[## $getObjectProperty[carta;title]
  $getObjectProperty[carta;description]]
  $color[$getObjectProperty[carta;color]]
  $footer[Notficação: $getGlobalUserVar[pagecorr] id: $splitText[$getGlobalUserVar[pagecorr]]]
  $thumbnail[$authorAvatar]
  $addButton[1;;primary;CORA_$authorID;false;▶️]
  $addButton[1;;primary;CORV_$authorID;false;◀️]
  $setGlobalUserVar[leucorr;true]
  $createObject[carta;$readFile[./mydatabase/correios/$splitText[$getGlobalUserVar[pagecorr]].json]]
  $textSplit[$getGlobalUserVar[correios];/]

  $setGlobalUserVar[pagecorr;$sum[$getGlobalUserVar[pagecorr];1]]

   $onlyIf[$getGlobalUserVar[pagecorr]!=$getGlobalUserVar[quantcorr];❌ | Você já está na última notificação!]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==CORA;]`
},{
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
  $deletecommand
  $author[$username;$userAvatar]
  $title[📬 | Notificações | 📬 ]
  $description[## $getObjectProperty[carta;title]
  $getObjectProperty[carta;description]]
  $color[$getObjectProperty[carta;color]]
  $footer[Notficação: $getGlobalUserVar[pagecorr] id: $splitText[$getGlobalUserVar[pagecorr]]]
  $thumbnail[$authorAvatar]
  $addButton[1;;primary;CORA_$authorID;false;▶️]
  $addButton[1;;primary;CORV_$authorID;false;◀️]
  $setGlobalUserVar[leucorr;true]
  $createObject[carta;$readFile[./mydatabase/correios/$splitText[$getGlobalUserVar[pagecorr]].json]]
  $textSplit[$getGlobalUserVar[correios];/]
  $setGlobalUserVar[pagecorr;$sub[$getGlobalUserVar[pagecorr];1]]
  
  $onlyIf[$getGlobalUserVar[pagecorr]!=1;❌ | Você já está na primeira notificação!  {options:{ephemeral:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
  {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==CORV;]`
}]