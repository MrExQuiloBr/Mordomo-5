module.exports = [{
  name: "cadastrar",
  aliases: ['registrar', 'start', 'cadastro'],
  code: `
  $title[📋 | Cadastro | 📋]
  $description[Escreva no chat o seu Nick do TikTok! **NÃO** use o apelido!
você vai poder decidir se vai querer privar ou não.
o processo do registro pode demorar, o processo para validar sua conta pode acabar não tendo certeza se é realmente sua, necessitando de uma verificação pessoal com você.]
  $image[https://media.discordapp.net/attachments/1199707899174326275/1241886791879884942/Screenshot_20240519_195212_TikTok.jpg?ex=664bd4b4&is=664a8334&hm=9e20107f232e0db6070de4ce33e552e3c6740ca4cfb68f5e1719b3778a6750ad&]
  $color[#c3ffb1]
  $awaitMessages[$channelID;$authorID;60s;everything;cadastro;❌ | a ação foi cancelada! você demorou demais para responder e para recomeçar digite o comando outra vez!]
  $onlyIf[$getGlobalUserVar[conta;$authorID]==x;❌ | você já tem uma conta! se você acredita que isso é um erro, contate o suporte!]
  `
},{
  name: "cadastro",
  type: "awaited",
  code: `
  $title[📋 | Cadastro | 📋]
  $description[Seu nome é: \`$message\`, isso está correto?]
  $color[#c3ffb1]
  $addButton[1;Sim;success;CASIM_$authorID;false;✅]
  $addButton[1;Não;danger;CANAO_$authorID;false;❌]
  
  $setGlobalUserVar[conta;$message;$authorID]`
},{
  type: "interaction",
  prototype: "button",
  code: `
  $interactionUpdate[;{newEmbed:{title:📋 | Cadastro | 📋}{description:sua conta foi definida com sucesso! você vai querer privar o seu nome? lembrando que seu nome do TikTok não irá aparecer caso alguém use m.perfil em você, porém irá aparecer caso algum administrador use um comando especial!}{color:c3ffb1}}{actionRow:{button:Privar:danger:PRV_$authorID:false:🔒}{button:Não Privar:success:NPRV_$authorID:false:🔓}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==CASIM;]
  `
},{
  type: "interaction",
  prototype: "button",
  code: `
  $title[📋 | Cadastro | 📋]
  $description[✅ | sua conta foi privada com sucesso!]
  $color[#c3ffb1]
$setGlobalUserVar[privado;true;$authorID]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==PRV;]
  `
},{
  type: "interaction",
  prototype: "button",
  code: `
  $title[📋 | Cadastro | 📋]
  $description[✅ | sua conta agora é publica!]
  $color[c3ffb1]
$setGlobalUserVar[privado;false;$authorID]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==NPRV;]
  `
},{
  type: "interaction",
  prototype: "button",
  code: `
  $interactionUpdate[;{newEmbed:{title:📋 | Cadastro | 📋}{description:❌ | ação cancelada!}{color:c3ffb1}}]
  $setGlobalUserVar[conta;x;$authorID]
  
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==CANAO;]
  `
}]


// $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {options:{ephemeral:true}}
//     {extraOptions:{interaction:true}}]
//     $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==IDWA;]