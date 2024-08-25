module.exports = [{
  name: "viagem",
  $if: "old",
  code: `
  $if[$getGlobalUserVar[minigame;$authorID]==1]
    $title[🚛 | Viagem | 🚛]
    $description[Quando o Euro truck simulator 2 foi lançado?]
    $color[#ff8f8f]
    $thumbnail[$authorAvatar]
    $footer[Acerte o minigame pra ganhar um bônus!]
    $addButton[1;2012;primary;MN1_$authorID;false;📅]
    $addButton[1;2014;primary;MN2_$authorID;false;📅]
    $addButton[1;2015;primary;MN3_$authorID;false;📅]
    $addButton[1;2011;primary;MN4_$authorID;false;📅]
  $endif
  $if[$getGlobalUserVar[minigame;$authorID]==2]
    $title[🚛 | Viagem | 🚛]
    $description[Quando o Euro truck simulator 1 foi lançado?]
    $color[#ff8f8f]
    $thumbnail[$authorAvatar]
    $footer[Acerte o minigame pra ganhar um bônus!]
    $addButton[1;2007;primary;MN4_$authorID;false;📅]
    $addButton[1;2010;primary;MN2_$authorID;false;📅]
    $addButton[1;2012;primary;MN3_$authorID;false;📅]
    $addButton[1;2008;primary;MN1_$authorID;false;📅]
  $endif
  $if[$getGlobalUserVar[minigame;$authorID]==3]
    $title[🚛 | Viagem | 🚛]
    $description[Qual é a empresa fictícia no ETS2 que não existe na vida real?]
    $color[#ff8f8f]
    $thumbnail[$authorAvatar]
    $footer[Acerte o minigame pra ganhar um bônus!]
    $addButton[1;EuroGoodies;primary;MN1_$authorID;false;🏢]
    $addButton[1;DHL;primary;MN2_$authorID;false;🏢]
    $addButton[1;Stokes;primary;MN3_$authorID;false;🏢]
    $addButton[1;TNT;primary;MN4_$authorID;false;🏢]
  $endif
  $if[$getGlobalUserVar[minigame;$authorID]==4]
    $title[🚛 | Viagem | 🚛]
    $description[Qual é a cidade mais ao norte no mapa base do ETS2?]
    $color[#ff8f8f]
    $thumbnail[$authorAvatar]
    $footer[Acerte o minigame pra ganhar um bônus!]
    $addButton[1;Oslo;primary;MN3_$authorID;false;🌁]
    $addButton[1;Berlin;primary;MN2_$authorID;false;🌁]
    $addButton[1;Stockholm;primary;MN1_$authorID;false;🌁]
    $addButton[1;Helsinki;primary;MN4_$authorID;false;🌁]
  $endif
  $if[$getGlobalUserVar[minigame;$authorID]==5]
    $title[🚛 | Viagem | 🚛]
    $description[Qual foi a primeira DLC de mapa lançada para o ETS2?]
    $color[#ff8f8f]
    $thumbnail[$authorAvatar]
    $footer[Acerte o minigame pra ganhar um bônus!]
    $addButton[1;Going East!;primary;MN1_$authorID;false;🇪🇺]
    $addButton[1;Scandinavia;primary;MN2_$authorID;false;🇪🇺]
    $addButton[1;Vive la France!;primary;MN3_$authorID;false;🇪🇺]
    $addButton[1;Beyond the Baltic Sea;primary;MN4_$authorID;false;🇪🇺]
  $endif
  $if[$getGlobalUserVar[minigame;$authorID]==6]
    $title[🚛 | Viagem | 🚛]
    $description[Qual desses caminhões não está disponível no ETS2?]
    $color[#ff8f8f]
    $thumbnail[$authorAvatar]
    $footer[Acerte o minigame pra ganhar um bônus!]
    $addButton[1;Scania;primary;MN3_$authorID;false;🚛]
    $addButton[1;Volvo;primary;MN2_$authorID;false;🚛]
    $addButton[1;Ford;primary;MN1_$authorID;false;🚛]
    $addButton[1;Renault;primary;MN4_$authorID;false;🚛]
  $endif
  $if[$getGlobalUserVar[minigame;$authorID]==7]
    $title[🚛 | Viagem | 🚛]
    $description[Qual é o nível necessário para desbloquear o motor mais potente no ETS2?]
    $color[#ff8f8f]
    $thumbnail[$authorAvatar]
    $footer[Acerte o minigame pra ganhar um bônus!]
    $addButton[1;10;primary;MN4_$authorID;false;⚙️]
    $addButton[1;15;primary;MN2_$authorID;false;⚙️]
    $addButton[1;20;primary;MN3_$authorID;false;⚙️]
    $addButton[1;25;primary;MN1_$authorID;false;⚙️]
  $endif
  $if[$getGlobalUserVar[minigame;$authorID]==8]
    $title[🚛 | Viagem | 🚛]
    $description[Quai(s) paise(s) compõe(m) a DLC Iberia?]
    $color[#ff8f8f]
    $thumbnail[$authorAvatar]
    $footer[Acerte o minigame pra ganhar um bônus!]
    $addButton[1;França e Espanha;primary;MN2_$authorID;false;🇫🇷]
    $addButton[1;Portugal e Espanha;primary;MN1_$authorID;false;🇵🇹]
    $addButton[1;Italia;primary;MN3_$authorID;false;🇮🇹]
    $addButton[1;Rússia;primary;MN4_$authorID;false;🇷🇺]
  $endif
  $setGlobalUserVar[minigame;$random[1;8]]
  $onlyIf[$getGlobalUserVar[emviagem;$authorID]==true;❌ | você não está em uma viagem!]
  `
},{
  // b1
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
  $deleteCommand
  $title[🚛 | Viagem | 🚛]
    $description[🎉 | Parabéns você acertou! e ganhou 10% a mais! Você ganhou: **R$$numberSeparator[$roundTenth[$math[$getObjectProperty[user;Pagamento]*1.10];2]]** e agora tem: **R$$numberSeparator[$getGlobalUserVar[money]]** de saldo.]
    $color[#74ff5f]
    $thumbnail[$authorAvatar]
    $setGlobalUserVar[emviagem;false]
    $setGlobalUserVar[estado;$getObjectProperty[user;Estado]]
    $setGlobalUserVar[cidade;$getObjectProperty[user;Destino]]
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$roundTenth[$math[$getObjectProperty[user;Pagamento]*1.10];2]]]
    $createObject[user;$getGlobalUserVar[enGerada;$authorID]]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==MN1;]
  `
},{
  // b2
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
  $setGlobalUserVar[emviagem;false]
  $setGlobalUserVar[estado;$getObjectProperty[user;Estado]]
  $setGlobalUserVar[cidade;$getObjectProperty[user;Destino]]
  $deleteCommand
  $title[🚛 | Viagem | 🚛]
    $description[❌ | Você marcou a resposta incorreta e não ganhou o bônus! e agora tem: **R$$numberSeparator[$getGlobalUserVar[money]]** na sua conta bancária.]
    $color[#ff8f8f]
    $thumbnail[$authorAvatar]
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$getObjectProperty[user;Pagamento]]]
    $createObject[user;$getGlobalUserVar[enGerada;$authorID]]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==MN2;]
  `
},{
  // b3
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
  $setGlobalUserVar[emviagem;false]
  $setGlobalUserVar[estado;$getObjectProperty[user;Estado]]
  $setGlobalUserVar[cidade;$getObjectProperty[user;Destino]]
  $deleteCommand
  $title[🚛 | Viagem | 🚛]
    $description[❌ | Você marcou a resposta incorreta e não ganhou o bônus! e agora tem: **R$$numberSeparator[$getGlobalUserVar[money]]** na sua conta bancária.]
    $color[#ff8f8f]
    $thumbnail[$authorAvatar]
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$getObjectProperty[user;Pagamento]]]
    $createObject[user;$getGlobalUserVar[enGerada;$authorID]]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==MN3;]
  `
},{
  // b4
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
  $setGlobalUserVar[emviagem;false]
  $setGlobalUserVar[estado;$getObjectProperty[user;Estado]]
  $setGlobalUserVar[cidade;$getObjectProperty[user;Destino]]
  $deleteCommand
  $title[🚛 | Viagem | 🚛]
    $description[❌ | Você marcou a resposta incorreta e não ganhou o bônus! e agora tem: **R$$numberSeparator[$getGlobalUserVar[money]]** na sua conta bancária.]
    $color[#ff8f8f]
    $thumbnail[$authorAvatar]
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$getObjectProperty[user;Pagamento]]]
    $createObject[user;$getGlobalUserVar[enGerada;$authorID]]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==MN4;]
  `
}]