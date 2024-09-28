module.exports = [{
  name: "central de ajuda",
  code: `
  $title[☎️ | Central de Ajuda | ☎️]
  $description[## 📞 | Denuncia | 📞
  faça suas denuncias contra usuários >**DO SERVIDOR**<.
  
  ## 🆘 | Ajuda | 🆘 
  peça ajuda aos administradores sobre algo do server, ou do ets2.
  
  ## 🤓 | Sugestões | 🤓
  faça suas sugestões para o servidor.
  
  ## 📝 | Reportar Bug | 📝
  reporte os bugs do servidor ou do bot.]
  $addSelectMenu[1;string;central;🚨 | Suporte | 🚨;1;1;false;Denuncia:Denuncie alguem do servidor:denuncia:false:📞;Ajuda:Ajuda ou suporte com algo do ets2 ou do servidor:ajuda:false:🆘;Sugestões:Envie uma sugestão para o servidor:sugestao:false:🤓;Reportar bug:Reporte algum bug do server ou bot pro mecânico:reportbug:false:🔧]
  $color[#b1178a]
  `
},{
  name: "central",
  type: "interaction", // clarifying that this command is an Interaction
  prototype: "selectMenu",
  code: `
  $interactionReply[Ticket de **Denúncia** criado em: <#$get[ticket]>;;true]
  $setChannelVar[ownerticket;$authorID;$get[ticket]]
  $modifyChannelPerms[$get[ticket];$authorID;+sendmessages;+addreactions;+viewchannel]
  $let[ticket;$newTicket[ticket-d-$getVar[tdcount];Ticket de denuncias criado por <@$authorID>! {newEmbed:{description:## **BirdTool**:
  > Cargo: <@&1289580830599151727>,<@&1289581706806038594>
  > Classificação: $if[$getVar[birdafk]==true;$getVar[birdclass];desligado]
  ## **Samurairj**:
  > Cargo: <@&1289580830599151727>,<@&1289581974473801750>
  > Classificação: Inexistente
  ## **Sérgio**:
  > Cargo: <@&1289580830599151727>,<@&1289581974473801750>
  > Classificação: Inexistente
  ## **DarkCoffee**:
  > Cargo: <@&1289581522827083867>, <@&1289582195769606184>
  > Classificação: Inexistente}{footer: Para fechar o ticket use m.fecharticket}{color:ff64e0}};1289589981928488960;true;Algum erro ocorreu!!]]
  $setVar[tdcount;$sum[$getVar[tdcount];1]]
  $onlyIf[$interactionData[values[0]]==denuncia;]
  `
},{
  name: "central",
  type: "interaction", // clarifying that this command is an Interaction
  prototype: "selectMenu",
  code: `
    $interactionReply[Ticket de **Ajuda** criado em: <#$get[ticket]>;;true]
    $setChannelVar[ownerticket;$authorID;$get[ticket]]
    $modifyChannelPerms[$get[ticket];$authorID;+sendmessages;+addreactions;+viewchannel]
    $let[ticket;$newTicket[ticket-a-$getVar[tacount];Ticket de ajuda criado por <@$authorID>! {newEmbed:{description:## **BirdTool**:
    > Cargo: <@&1289580830599151727>,<@&1289581706806038594>
    > Classificação: $if[$getVar[birdafk]==true;$getVar[birdclass];desligado]
    ## **Samurairj**:
    > Cargo: <@&1289580830599151727>,<@&1289581974473801750>
    > Classificação: Inexistente
    ## **Sérgio**:
    > Cargo: <@&1289580830599151727>,<@&1289581974473801750>
    > Classificação: Inexistente
    ## **DarkCoffee**:
    > Cargo: <@&1289581522827083867>, <@&1289582195769606184>
    > Classificação: Inexistente}{footer: Para fechar o ticket use m.fecharticket}{color:ff64e0}};1289589981928488960;true;Algum erro ocorreu!!]]
    $setVar[tacount;$sum[$getVar[tacount];1]]
    $onlyIf[$interactionData[values[0]]==ajuda;]
    `
},{
  name: "central",
  type: "interaction", // clarifying that this command is an Interaction
  prototype: "selectMenu",
  code: `
    $interactionReply[Ticket de **Sugestão** criado em: <#$get[ticket]>;;true]
    $setChannelVar[ownerticket;$authorID;$get[ticket]]
    $modifyChannelPerms[$get[ticket];$authorID;+sendmessages;+addreactions;+viewchannel]
    $let[ticket;$newTicket[ticket-s-$getVar[tscount];Ticket de sugestões criado por <@$authorID>! {newEmbed:{description:## **BirdTool**:
    > Cargo: <@&1289580830599151727>,<@&1289581706806038594>
    > Classificação: $if[$getVar[birdafk]==true;$getVar[birdclass];desligado]
    ## **Samurairj**:
    > Cargo: <@&1289580830599151727>,<@&1289581974473801750>
    > Classificação: Inexistente
    ## **Sérgio**:
    > Cargo: <@&1289580830599151727>,<@&1289581974473801750>
    > Classificação: Inexistente
    ## **DarkCoffee**:
    > Cargo: <@&1289581522827083867>, <@&1289582195769606184>
    > Classificação: Inexistente}{footer: Para fechar o ticket use m.fecharticket}{color:ff64e0}};1289589981928488960;true;Algum erro ocorreu!!]]
    $setVar[tscount;$sum[$getVar[tscount];1]]
    $onlyIf[$interactionData[values[0]]==sugestao;]
    `
},{
  name: "central",
  type: "interaction", // clarifying that this command is an Interaction
  prototype: "selectMenu",
  code: `
    $interactionReply[Ticket de **Reportar bug** criado em: <#$get[ticket]>;;true]
    $setChannelVar[ownerticket;$authorID;$get[ticket]]
    $modifyChannelPerms[$get[ticket];$authorID;+sendmessages;+addreactions;+viewchannel]
    $let[ticket;$newTicket[ticket-r-$getVar[trcount];Ticket de reportar bug criado por <@$authorID>! {newEmbed:{description:## **BirdTool**:
    > Cargo: <@&1289580830599151727>,<@&1289581706806038594>
    > Classificação: $if[$getVar[birdafk]==true;$getVar[birdclass];desligado]
    ## **Samurairj**:
    > Cargo: <@&1289580830599151727>,<@&1289581974473801750>
    > Classificação: Inexistente
    ## **Sérgio**:
    > Cargo: <@&1289580830599151727>,<@&1289581974473801750>
    > Classificação: Inexistente
    ## **DarkCoffee**:
    > Cargo: <@&1289581522827083867>, <@&1289582195769606184>
    > Classificação: Inexistente}{footer: Para fechar o ticket use m.fecharticket}{color:ff64e0}};1289589981928488960;true;Algum erro ocorreu!!]]
    $setVar[trcount;$sum[$getVar[trcount];1]]
    $onlyIf[$interactionData[values[0]]==reportbug;]
    `
},{
  name: "fecharticket",
  code: `
  $modifyChannelPerms[$channelID;$getChannelVar[ownerticket;$channelID];-sendmessages;-addreactions;-viewchannel]
  $description[:lock: | Este canal foi fechado por <@$authorID>, para deletar pressione o botão abaixo.]
  $color[ff64e0]
  $addButton[1;Deletar;danger;delticket;false]
  $onlyIf[$isTicket==true;❌ | Este canal não é um ticket!]
  `
},{
  name: "delticket",
  type: "interaction",
  prototype: "button",
  code: `
  $closeTicket[❌ | Este canal não é um ticket!]
  $wait[3s]
  $interactionReply[{newEmbed:{description:🗑️ | Este canal será deletado em 3 segundos!}{color:ff64e0}};;true]
  `
}]