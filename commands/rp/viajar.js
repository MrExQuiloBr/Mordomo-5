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
  $interactionUpdate[.]
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
  $interactionUpdate[.]
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
  $interactionUpdate[.]
  $title[🚛 | Viajar | 🚛]
  $description[**📍 | Início:** $getGlobalUserVar[cidade;$authorID]
  **📌 | Destino:** $get[city]
  **🏭 | Empresa Inicial:** $get[empresaINI]
  **🏭 | Empresa Final:** $get[empresaFIM]
  **💵 | Pagamento:** R$$numberSeparator[$get[pagamento]]
  **⏰ | Tempo:** $get[tempo] minutos
  **🏙️ | Local:** $if[$getObjectProperty[city2;program]==true;Após a viagem você vai ficar em $get[city]!;Após a viagem você voltará a cidade de onde saiu!]]
  $thumbnail[$getObjectProperty[city2;image]]
  $footer[entregas geradas!]
  $color[#ff0000]
  $addButton[1;;primary;Gerador;false;▶️]
  $addButton[1;Aceitar entrega;success;ACTG_$authorID;false;✅]

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
}]