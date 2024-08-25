module.exports = [{
  name: "criar-comboio",
  aliases: ['criar comboio'],
  code: `
  $title[🚛 | Criador de Comboios | 🚛]
  $description[Aperte o botão para criar um comboio! preencha as informações de acordo com o comboio]
  $addButton[1;Criar Comboio;primary;ccomboio;false;🚛]
  $color[#ffffff]
  `
},{
  name: "ccomboio",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionModal[Responda as perguntas para o comboio!;mccomboio; 
  {actionRow:
    {textInput:📁 | Nome do comboio:1:nome:true:Nome do comboio aqui:2:50}
  }
  {actionRow:
    {textInput:🗺️ | Mapa do comboio:1:mapa:true:Mapa do comboio aqui:2:25}
  }
  {actionRow:
    {textInput:👤 | Players do comboio:1:players:true:Quantidade máxima de pessoas no comboio:1:2}
  }
  {actionRow:
    {textInput:🔒 | Senha do comboio:1:senha:false:(opcional) Senha do comboio:1:30}
  }
]
  `
},{
  name: "mccomboio",
  type: "interaction",
  prototype: "modal", // Using "prototype" as this interaction belongs to a modal.
  code: `
  $interactionReply[✅ | Comboio criado com sucesso! Verifique o canal <#1241881717523087410>;everyone;true]
  $channelSendMessage[1241881717523087410;<@&1274032609088770048>{newEmbed:{title:🟢 | COMBOIO DE $toLocaleUpperCase[$username] | 🟢}{description:**🚛 | dono do comboio#COLON#** $username
  **🔤 | nome do comboio#COLON#** $textInputValue[nome]
  **🗺️ Mapa:** $textInputValue[mapa]
  **👥 | players max.#COLON#** $textInputValue[players]
  $if[textInputValue[senha]==;**🔒 | senha:** Não definida;**🔒 | senha:** $textInputValue[senha]]}{color:#ffffff}{thumbnail:$authorAvatar}}]
  `
}] 