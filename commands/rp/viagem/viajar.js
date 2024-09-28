module.exports = [{
  name: "viajar",
  aliases: ['trabalhar', 'work'],
  $if: "old",
  code: `
  $if[$fileExists[./mydatabase/map/$getGlobalUserVar[estado]/$getGlobalUserVar[cidade].json]==true]
  $title[🚛 | Viajar | 🚛]
  $description[**📍 | Início:** $getObjectProperty[rotas;Inicio]
  **📌 | Destino:** $getObjectProperty[rotas;Destino]
  **💵 | Pagamento:** R$$numberSeparator[$getObjectProperty[rotas;Pagamento]]
  **⏰ | Tempo:** $getObjectProperty[rotas;Tempo]
  **🏭 | Empresa Inicial:** $getObjectProperty[rotas;EmpresaInicial]
  **🏭 | Empresa Final:** $getObjectProperty[rotas;EmpresaFinal]
  **🚚 | Reboque:** $getObjectProperty[rotas;Reboque]
  **🏷️ | Entrega:** $getObjectProperty[rotas;Entrega]
  **💰 | XP Necessário:** $getObjectProperty[rotas;xpnecessário]
  $if[$getGlobalUserVar[caminhão;$authorID]==x]**🚛 | Potência necessária:** $getObjectProperty[rotas;caminhao]$endif]
  $image[$getObjectProperty[rotas;Imagem]]
  $color[#ffffff]
  $addButton[1;;primary;AVR_$authorID;false;▶️]
  $addButton[1;Aceitar entrega;success;ACTR_$authorID;false;✅]
  $addButton[1;;primary;VAR_$authorID;false;◀️]
  $createObject[rotas;$splitText[1]]
  $textSplit[$readFile[./mydatabase/map/$getGlobalUserVar[estado;$authorID]/$getGlobalUserVar[cidade;$authorID].json];,,,]
  $setGlobalUserVar[page;1;$authorID]
  $else
  $title[🚛 | Viajar | 🚛]
  $description[**📍 | Início:** $getGlobalUserVar[cidade;$authorID]
  **📌 | Destino:** $get[city]
  **🌃 | Estado:** $get[estado]
  **🏭 | Empresa Inicial:** $get[empresaINI]
  **🏭 | Empresa Final:** $get[empresaFIM]
  **💵 | Pagamento:** R$$numberSeparator[$get[pagamento]]
  **⏰ | Tempo:** $get[tempo] minutos]
  $thumbnail[$getObjectProperty[city2;image]]
  $footer[entregas geradas!]
  $color[#ff0000]
  $addButton[1;;primary;Gerador;false;▶️]
  $addButton[1;Aceitar entrega;success;ACTG_$authorID;false;✅]
  $setGlobalUserVar[enGerada;{
  "inicio": "$getGlobalUserVar[cidade;$authorID]",
  "Destino": "$get[city]",
  "Estado": "$get[estado]",
  "empresaini": "$get[empresaINI]",
  "empresafim": "$get[empresaFIM]",
  "Pagamento": "$get[pagamento]",
  "tempo": "$get[tempo]"
  };$authorID]
  $let[tempo;$if[$get[estado]==$getGlobalUserVar[estado;$authorID]]$random[40;100]$else$random[100;350]$endif]
  $let[pagamento;$if[$get[estado]==$getGlobalUserVar[estado;$authorID]]$random[221;771]$else$random[771;2089]$endif]
  
  $let[empresaFIM;$randomText[Itaú Unibanco;Bradesco;Banco do Brasil;Santander Brasil;Caixa Econômica Federal;Rede D'Or São Luiz;Hapvida;Dasa;SulAmérica;Unimed;Rede Globo;SBT;Record TV;Band;Natura;Lojas Americanas;Via Varejo;Renner;C&A;Riachuelo;Carrefour Brasil;Grupo BIG;Centauro;Netshoes;Amazon Brasil;Mercado Livre;Tok&Stok;Casas Bahia;Leroy Merlin;Fast Shop]]
  $let[empresaINI;$randomText[Vale;Petrobras;Embraer;Ambev;BRF;JBS;Natura;Suzano;Gerdau;Klabin;Weg;Marfrig;CSN;Usiminas;Bunge;Eletrobras;Votorantim;Raízen;Grupo Pão de Açúcar;Rumo Logística;Minerva Foods;Localiza;Energisa;Grupo Fleury;Hering;Boticário;Duratex;Magazine Luiza;Cemig;Copel]]
  $createObject[city2;$readFile[./mydatabase/map/$get[estado]/$get[city].config]]
  $let[city;$splitText[$random[2;$sum[$splitText[1];1]]]]
  $textSplit[$readFile[./mydatabase/map/$get[estado]/city.config];,]
  $let[estado;$randomText[São Paulo;Rio de Janeiro]]
  $createObject[city1;$readFile[./mydatabase/map/$getGlobalUserVar[estado;$authorID]/$getGlobalUserVar[cidade;$authorID].config]]
  $endif
  $cooldown[10m;❌ | Espere %time% para poder viajar novamente!]
  $onlyIf[$getGlobalUserVar[cidade]!=x;❌ | você ainda não escolheu um lugar pra começar! use \`m.start\`]
  $onlyIf[$getGlobalUserVar[conta]!=x;❌ | <@$authorID>, Você não tem uma conta! Use \`m.cadastar\` para criar uma!]
  `
},{
  // botão avançar
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
  $deleteCommand
  $title[🚛 | Viajar | 🚛]
  $description[**📍 | Início:** $getObjectProperty[rotas;Inicio]
  **📌 | Destino:** $getObjectProperty[rotas;Destino]
  **💵 | Pagamento:** R$$numberSeparator[$getObjectProperty[rotas;Pagamento]]
  **⏰ | Tempo:** $getObjectProperty[rotas;Tempo]
  **🏭 | Empresa Inicial:** $getObjectProperty[rotas;EmpresaInicial]
  **🏭 | Empresa Final:** $getObjectProperty[rotas;EmpresaFinal]
  **🚚 | Reboque:** $getObjectProperty[rotas;Reboque]
  **🏷️ | Entrega:** $getObjectProperty[rotas;Entrega]
  **💰 | XP Necessário:** $getObjectProperty[rotas;xpnecessário]
  $if[$getGlobalUserVar[caminhão;$authorID]!=x]**🚛 | Potência necessária:** $getObjectProperty[rotas;caminhao]$endif]
  $image[$getObjectProperty[rotas;Imagem]]
  $color[#ffffff]
  $createObject[rotas;$splitText[$getGlobalUserVar[page;$authorID]]]
  $textSplit[$readFile[./mydatabase/map/$getGlobalUserVar[estado;$authorID]/$getGlobalUserVar[cidade;$authorID].json];,,,]
  $if[$getGlobalUserVar[page;$authorID]==$getObjectProperty[config;entregas]]
  $addButton[1;;primary;AVR_$authorID;false;▶️]
  $else
  $addButton[1;;primary;Gerador;false;▶️]
  $endif
  $addButton[1;Aceitar entrega;success;ACTR_$authorID;false;✅]
  $addButton[1;;primary;VAR_$authorID;false;◀️]
  $setGlobalUserVar[page;$sum[$getGlobalUserVar[page;$authorID];1];$authorID]
  $if[$getGlobalUserVar[page;$authorID]==$getObjectProperty[config;entregas]]$footer[você está na ultima entrega programada! as próximas entregas a partir daqui vão ser geradas automaticamente!]$endif
  $createObject[config;$readFile[./mydatabase/map/$getGlobalUserVar[estado;$authorID]/$getGlobalUserVar[cidade;$authorID].config]]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==AVR;]
  `
},{
  // voltar
  type: "interaction",
  prototype: "button",
  code: `
  $deleteCommand
  $title[🚛 | Viajar | 🚛]
  $description[**📍 | Início:** $getObjectProperty[rotas;Inicio]
  **📌 | Destino:** $getObjectProperty[rotas;Destino]
  **💵 | Pagamento:** R$$numberSeparator[$getObjectProperty[rotas;Pagamento]]
  **⏰ | Tempo:** $getObjectProperty[rotas;Tempo]
  **🏭 | Empresa Inicial:** $getObjectProperty[rotas;EmpresaInicial]
  **🏭 | Empresa Final:** $getObjectProperty[rotas;EmpresaFinal]
  **🚚 | Reboque:** $getObjectProperty[rotas;Reboque]
  **🏷️ | Entrega:** $getObjectProperty[rotas;Entrega]
  **💰 | XP Necessário:** $getObjectProperty[rotas;xpnecessário]
  $if[$getGlobalUserVar[caminhão;$authorID]==x;;**🚛 | Potência necessária:** $getObjectProperty[rotas;caminhao]]
  ]
  $image[$getObjectProperty[rotas;Imagem]]
  $color[#ffffff]
  $addButton[1;;primary;AVR_$authorID;false;▶️]
  $addButton[1;Aceitar entrega;success;ACTR_$authorID;false;✅]
  $addButton[1;;primary;VAR_$authorID;false;◀️]
  $createObject[rotas;$splitText[$getGlobalUserVar[page;$authorID]]]
  $setGlobalUserVar[page;$sub[$getGlobalUserVar[page;$authorID];1];$authorID]
  $if[$getGlobalUserVar[page;$authorID]!=1;;$footer[você já chegou na primeira página!]]
  $createObject[config;$readFile[./mydatabase/map/$getGlobalUserVar[estado;$authorID]/$getGlobalUserVar[cidade;$authorID].config]]
  $textSplit[$readFile[./mydatabase/map/$getGlobalUserVar[estado;$authorID]/$getGlobalUserVar[cidade;$authorID].json];,,,]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==VAR;]
  `
},{
  // entregas geradas
  name: "Gerador",
  type: "interaction",
  prototype: "button",
  code: `
  $deleteCommand
  $title[🚛 | Viajar | 🚛]
  $description[**📍 | Início:** $getGlobalUserVar[cidade;$authorID]
  **📌 | Destino:** $get[city]
  **🌃 | Estado:** $get[estado]
  **🏭 | Empresa Inicial:** $get[empresaINI]
  **🏭 | Empresa Final:** $get[empresaFIM]
  **💵 | Pagamento:** R$$numberSeparator[$get[pagamento]]
  **⏰ | Tempo:** $get[tempo] minutos
  $thumbnail[$getObjectProperty[city2;image]]
  $footer[entregas geradas!]
  $color[#ff0000]
  $addButton[1;;primary;Gerador;false;▶️]
  $addButton[1;Aceitar entrega;success;ACTG_$authorID;false;✅]
  $setGlobalUserVar[enGerada;{
  "inicio": "$getGlobalUserVar[cidade;$authorID]",
  "Destino": "$get[city]",
  "Estado": "$get[estado]",
  "empresaini": "$get[empresaINI]",
  "empresafim": "$get[empresaFIM]",
  "Pagamento": "$get[pagamento]",
  "tempo": "$get[tempo]"
  };$authorID]
  $let[tempo;$if[$get[estado]==$getGlobalUserVar[estado;$authorID];$random[40;100];$random[100;350]]]
  $let[pagamento;$if[$get[estado]==$getGlobalUserVar[estado;$authorID];$random[221;771];$random[771;2089]]]
  
  $let[empresaFIM;$randomText[Itaú Unibanco;Bradesco;Banco do Brasil;Santander Brasil;Caixa Econômica Federal;Rede D'Or São Luiz;Hapvida;Dasa;SulAmérica;Unimed;Rede Globo;SBT;Record TV;Band;Natura;Lojas Americanas;Via Varejo;Renner;C&A;Riachuelo;Carrefour Brasil;Grupo BIG;Centauro;Netshoes;Amazon Brasil;Mercado Livre;Tok&Stok;Casas Bahia;Leroy Merlin;Fast Shop]]
  $let[empresaINI;$randomText[Vale;Petrobras;Embraer;Ambev;BRF;JBS;Natura;Suzano;Gerdau;Klabin;Weg;Marfrig;CSN;Usiminas;Bunge;Eletrobras;Votorantim;Raízen;Grupo Pão de Açúcar;Rumo Logística;Minerva Foods;Localiza;Energisa;Grupo Fleury;Hering;Boticário;Duratex;Magazine Luiza;Cemig;Copel]]
  $createObject[city2;$readFile[./mydatabase/map/$get[estado]/$get[city].config]]
  $let[city;$splitText[$random[2;$sum[$splitText[1];1]]]]
  $textSplit[$readFile[./mydatabase/map/$get[estado]/city.config];,]
  $let[estado;$randomText[São Paulo;Rio de Janeiro]]
  $createObject[city1;$readFile[./mydatabase/map/$getGlobalUserVar[estado;$authorID]/$getGlobalUserVar[cidade;$authorID].config]]
  `
},{
  // entrega aceita
  type: "interaction",
  prototype: "button",
  code: `
  $deleteCommand
  $sendMessage[{newEmbed:{title:🚛 | Viajar | 🚛}{description:Para terminar a viagem você precisa usar o comando **m.viagem**, e completar o minigame sugerido, esteja preparado para realiza-lo!}{color:#ffffff}}]
  $setGlobalUserVar[emviagem;true;$authorID]
  $title[🚛 | Viajar | 🚛]
  $description[Você aceitou a viagem!
  **📍 | Início:** $getGlobalUserVar[cidade;$authorID]
  **📌 | Destino:** $getObjectProperty[rotas;Destino]
  **💵 | Pagamento:** R$$numberSeparator[$getObjectProperty[rotas;Pagamento]]]
  $setGlobalUserVar[viagemType;normal;$authorID]
  $setGlobalUserVar[viagem;$getGlobalUserVar[page;$authorID];$authorID]
  $thumbnail[$getObjectProperty[rotas;Imagem]]
  $color[#82FA58]
  $setGlobalUserVar[enGerada;$splitText[$getGlobalUserVar[page;$authorID]]]
  $createObject[rotas;$splitText[$getGlobalUserVar[page;$authorID]]]
  $textSplit[$readFile[./mydatabase/map/$getGlobalUserVar[estado;$authorID]/$getGlobalUserVar[cidade;$authorID].json];,,,]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ACTR;]
  `
},{
  // aceitar entrega gerada
  type: "interaction",
  prototype: "button",
  code: `
  $deleteCommand
  $sendMessage[{newEmbed:{title:🚛 | Viajar | 🚛}{description:Para terminar a viagem você precisa usar o comando **m.viagem**, e completar o minigame sugerido, esteja preparado para realiza-lo!}{color:#ffffff}}]
  $setGlobalUserVar[emviagem;true;$authorID]
  $title[🚛 | Viajar | 🚛]
  $description[você aceitou a entrega gerada!
  **📍 | Início:** $getGlobalUserVar[cidade;$authorID]
  **📌 | Destino:** $getObjectProperty[user;Destino]
  **🌃 | Estado:** $getObjectProperty[user;Estado]
  **💵 | Pagamento:** R$$numberSeparator[$getObjectProperty[user;Pagamento]]]
  $color[#82FA58]
  $thumbnail[$getObjectProperty[city2;image]]
  $setGlobalUserVar[viagemType;gerada;$authorID]
  $createObject[city2;$readFile[./mydatabase/map/$getObjectProperty[user;Estado]/$getObjectProperty[user;Destino].config]]
  $createObject[user;$getGlobalUserVar[enGerada;$authorID]]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ACTG;]
  `
}]