module.exports = [{
  name: "start",
  code: `
  $title[🗺️ | Mordomo 5 | 🗺️]
  $description[escolha um estado para ver as cidades disponíveis!]
  $footer[na lista está apenas estados com cidades disponíveis]
  $color[#8fd3ff]
  $addSelectMenu[1;string;ecity_$authorID;🇧🇷 | Estados | 🇧🇷;1;1;false;São Paulo:Estado de São paulo:saopaulo:false:1274350458374197249;Rio de Janeiro:Estado de Rio de janeiro:riodejaneiro:false:1274361088082710602]
  $onlyIf[$getGlobalUserVar[cidade;$authorID]==x;❌ | você já começou sua carreira!]
  $onlyIf[$getGlobalUserVar[conta;$authorID]!=x;❌ | você não tem uma conta! use \`m.cadastrar\` para criar uma conta!]
  `
},{
  // São Paulo
  type: "interaction", // clarifying that this command is an Interaction
  prototype: "selectMenu",
  code: `
  $deleteCommand
  $title[🗺️ | Mordomo 5 | 🗺️]
  $description[🌁 | Cidades de São Paulo:
  São Paulo
  Campinas
  Rio Claro
  São Carlos
  Sorocaba | 🌁]
  $color[#8fd3ff]
  $footer[Escreva o nome da cidade aonde você deseja começar! você tem 50 segundos. se o tempo estrapolar você pode voltar o comando usando a barra abaixo.]
  $awaitMessages[$channelID;$authorID;50s;everything;spc;❌ | a ação foi cancelada! você demorou demais para responder e para recomeçar escolha o estado novamente na barra!]
  $addSelectMenu[1;string;ecity_$authorID;🇧🇷 | Estados | 🇧🇷;1;1;false;São Paulo:Estado de São paulo:saopaulo:false:1274350458374197249;Rio de Janeiro:Estado de Rio de janeiro:riodejaneiro:false:1274361088082710602]
  $onlyIf[$getGlobalUserVar[cidade;$authorID]==x;❌ | você já começou sua carreira!]
  $onlyIf[$getGlobalUserVar[conta;$authorID]!=x;❌ | você não tem uma conta! use \`m.cadastrar\` para criar uma conta!]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];Você não é o autor deste comando! {ephemeral}
    {interaction}]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ecity;]

   $onlyIf[$interactionData[values[0]]==saopaulo;]
  `
},{
  name: "spc",
  type: "awaited",
  code: `
  $title[🗺️ | Mordomo 5 | 🗺️]
  $description[🌁 | você pegou a cidade de **"$message"**! | 🌁]
  $color[#8fd3ff]
  $setGlobalUserVar[cidade;$message]
  $setGlobalUserVar[estado;São Paulo]
  $onlyIf[$fileExists[./mydatabase/map/São Paulo/$message.config]==true;❌ | essa cidade não existe!]
  $onlyIf[$getGlobalUserVar[cidade;$authorID]==x;❌ | você já começou sua carreira!]
  $onlyIf[$getGlobalUserVar[conta;$authorID]!=x;❌ | você não tem uma conta! use \`m.cadastrar\` para criar uma conta!]
  `
},{
  type: "interaction", // clarifying that this command is an Interaction
  prototype: "selectMenu",
  code: `
  $deleteCommand
  $title[🗺️ | Mordomo 5 | 🗺️]
  $description[🌁 | Cidades do Rio de Janeiro:
  Rio de Janeiro
  Duque de Caxias
  Resende
  Volta Redonda | 🌁]
  $color[#8fd3ff]
  $footer[Escreva o nome da cidade aonde você deseja começar! você tem 50 segundos. se o tempo estrapolar você pode voltar o comando usando a barra abaixo.]
  $awaitMessages[$channelID;$authorID;50s;everything;rjc;❌ | a ação foi cancelada! você demorou demais para responder e para recomeçar escolha o estado novamente na barra!]
  $addSelectMenu[1;string;ecity_$authorID;🇧🇷 | Estados | 🇧🇷;1;1;false;São Paulo:Estado de São paulo:saopaulo:false:1274350458374197249;Rio de Janeiro:Estado de Rio de janeiro:riodejaneiro:false:1274361088082710602]
  $onlyIf[$getGlobalUserVar[cidade;$authorID]==x;❌ | você já começou sua carreira!]
  $onlyIf[$getGlobalUserVar[conta;$authorID]!=x;❌ | você não tem uma conta! use \`m.cadastrar\` para criar uma conta!]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];Você não é o autor deste comando! {ephemeral}
    {interaction}]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ecity;]

   $onlyIf[$interactionData[values[0]]==riodejaneiro;]
  `
},{
  name: "rjc",
  type: "awaited",
  code: `
  $title[🗺️ | Mordomo 5 | 🗺️]
  $description[🌁 | você pegou a cidade de **"$message"**! | 🌁]
  $color[#8fd3ff]
  $setGlobalUserVar[cidade;$message]
  $setGlobalUserVar[estado;Rio de Janeiro]
  $onlyIf[$getGlobalUserVar[cidade;$authorID]==x;❌ | você já começou sua carreira!]
  $onlyIf[$fileExists[./mydatabase/map/Rio de Janeiro/$message.config]==true;❌ | essa cidade não existe!]
  $onlyIf[$getGlobalUserVar[conta;$authorID]!=x;❌ | você não tem uma conta! use \`m.cadastrar\` para criar uma conta!]
  `
}]