module.exports = [{
  name: "conta",
  aliases: ['perfil', 'profile'],
  code: `
  $title[📋 | Perfil | 📋]
  $description[$getGlobalUserVar[posição;$mentioned[1;true]]
  **💳 | Nome:** \`$username[$mentioned[1;true]]\`
  **📋 | TikTok:** $if[$getGlobalUserVar[privado;$mentioned[1;true]]==true;\`xxxxxxxx\`;\`$getGlobalUserVar[conta;$mentioned[1;true]]\`]
  **💰 | Pontos:** $numberSeparator[$getGlobalUserVar[pontos;$mentioned[1;true]]]
  **📆 | Data de criação:** $creationDate[$mentioned[1;true];date]]
  $thumbnail[$userAvatar[$mentioned[1;true]]]
  $color[#c3ffb1]
  $addButton[1;Editar Tiktok;danger;EDIT_$authorID;false;✏️]
  $if[$mentioned[1;true]!=$authorID;;$addButton[1;Privar tiktok;secondary;PRV_$authorID;false;🔒]
  $addButton[1;Tiktok Público;secondary;NPRV_$authorID;false;🔓]]
  `
},{
  type: "interaction",
  prototype: "button",
  code: `
  $deleteCommand
  $title[✍️ | Troca de nome | ✍️]
  $description[Escreva o nome que você deseja colocar no seu perfil]
  $color[#ff0000]
  $thumbnail[$authorAvatar]
  $cooldown[2d;❌ | você só vai poder trocar de nome daqui %time%!]
  $awaitMessages[$channelID;$authorID;60s;everything;editar;❌ | a ação foi cancelada! você demorou demais para responder e para recomeçar digite o comando outra vez!]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==EDIT;]`
},{
  name: "editar",
  type: "awaited",
  code: `
  $title[📄 | Cadastro | 📄]
  $description[Seu nome agora é: \`$message\`! ]
  $color[ffffff]
  $thumbnail[$authorAvatar]
  $setGlobalUserVar[conta;$message;$authorID]
  `
}]