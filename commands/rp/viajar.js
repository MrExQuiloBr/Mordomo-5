module.exports = [{
  name: "viajar",
  aliases: ['trabalhar', 'work'],
  code: `
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
  $createObject[rotas;$splitText[1]]
  $textSplit[$readFile[./mydatabase/map/$getGlobalUserVar[estado;$authorID]/$getGlobalUserVar[cidade;$authorID].json];,,,]
  $setGlobalUserVar[page;1;$authorID]
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
  **🏙️ | Local:** $get[local]]
  $thumbnail[$getObjectProperty[city2;image]]
  $footer[entregas geradas!]
  $color[#ff0000]
  $addButton[1;;primary;Gerador;false;▶️]
  $addButton[1;Aceitar entrega;success;ACTG_$authorID;false;✅]
  $setGlobalUserVar[enGerada;{
  "inicio": "$getGlobalUserVar[cidade;$authorID]",
  "destino": "$get[city]",
  "estado": "$get[estado]",
  "empresaini": "$get[empresaINI]",
  "empresafim": "$get[empresaFIM]",
  "pagamento": "$get[pagamento]",
  "tempo": "$get[tempo]",
  "local": "$get[local]"
  };$authorID]
  $let[local;$if[$getObjectProperty[city2;program]==true;Após a viagem você vai ficar em $get[city]!;Após a viagem você voltará a cidade de onde saiu!]]
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
  $setGlobalUserVar[tempoviagem;$get[hora]/$get[minuto];$authorID]
  $let[hora;$sum[$get[hour];$hour]]
  $let[minuto;$get[minute]]
  $let[hour;$if[$math[$advancedTextSplit[$get[tempo1];.;1]+$hour]>=24;$math[$advancedTextSplit[$get[tempo1];.;1]-24];$advancedTextSplit[$get[tempo1];.;1]]]
  $let[minute;$if[$math[$get[tempo2]+$minute]>=60;$math[$get[tempo2]+$minute-60];$get[tempo2]]]
  $let[tempo2;$if[$advancedTextSplit[$get[tempo1];.;2]>=60;$random[1;15];$advancedTextSplit[$get[tempo1];.;2]]]
  $let[tempo1;$roundTenth[$math[$get[tempo]/60];2]]
  $let[tempo;$getObjectProperty[user;tempo]]
  $setGlobalUserVar[emviagem;true;$authorID]
  $title[🚛 | Viajar | 🚛]
  $description[você aceitou a entrega gerada!
  **📍 | Início:** $getGlobalUserVar[cidade;$authorID]
  **📌 | Destino:** $getObjectProperty[user;destino]
  **🌃 | Estado:** $getObjectProperty[user;estado]
  **💵 | Pagamento:** R$$numberSeparator[$getObjectProperty[user;pagamento]]]
  $color[#82FA58]
  $thumbnail[$getObjectProperty[city2;image]]
  $setGlobalUserVar[viagemType;gerada;$authorID]
  $createObject[city2;$readFile[./mydatabase/map/$getObjectProperty[user;estado]/$getObjectProperty[user;destino].config]]
  $createObject[user;$getGlobalUserVar[enGerada;$authorID]]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ACTG;]
  `
}]