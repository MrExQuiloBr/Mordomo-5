module.exports = [{
  name: "conta",
  aliases: ['perfil', 'profile'],
  code: `
  $title[📋 | Perfil | 📋]
  $description[**💳 | Nome:** \`$username[$mentioned[1;true]]\`
  **📋 | TikTok:** $if[$getGlobalUserVar[privado;$mentioned[1;true]]==true;\`xxxxxxxx\`;\`$getGlobalUserVar[conta;$mentioned[1;true]]\`]
  **💰 | Pontos:** $numberSeparator[$getGlobalUserVar[pontos;$mentioned[1;true]]]
  **📆 | Data de criação:** $creationDate[$mentioned[1;true];date]]
  $thumbnail[$userAvatar[$mentioned[1;true]]]
  $color[#c3ffb1]
  $if[$mentioned[1;true]!=$authorID;;$addButton[1;Privar tiktok;secondary;PRV_$authorID;false;🔒]
  $addButton[1;Tiktok Público;secondary;NPRV_$authorID;false;🔓]]
  `
}]