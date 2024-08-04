module.exports = [{
  name: "iviagem",
  code: `
  Olá streamer! aperte o botão abaixo e preencha as informações!
  $addButton[1;Ônibus;primary;oniViagem;false]
  $addButton[1;Caminhão;primary;camViagem;false]
  `
},{
  name: "oniViagem",
  type: "interaction",
  prototype: "button", // Using "prototype" as this interaction belongs to a button.
  code: `
$interactionModal[Feito com amor por Kiko!🩷;oniviagem;
  {actionRow:
    {textInput:📍 | Qual a cidade de início da viagem?:1:inicio:true:$getGlobalUserVar[ultviagem]:2:200}
  }
  {actionRow:
    {textInput:📌 | Qual a cidade de destino da viagem?:1:destino:true:São paulo:2:200}
  }
  {actionRow:
    {textInput:🗺️ | Qual o mapa que você está utilizando?:1:mapa:true:Br Brasil:1:50}
  }
  {actionRow:
    {textInput:📈 | Quantos quilômetros tem o trajeto?:1:quilômetros:true:155:1:5}
  }
]`
},{
  name: "oniviagem",
  type: "interaction",
  prototype: "modal", // Using "prototype" as this interaction belongs to a modal.
  code: `
$interactionReply[Muito obrigado! as informações foram passadas no canal <#1269445517432193055>!;everyone;true]
$channelSendMessage[1269445517432193055;{newEmbed:
{title:🚌 | Informações da viagem | 🚌}{description:📍 | **Inicio da viagem:** $textInputValue[inicio]
📌 | **Destino da viagem:** $textInputValue[destino]
📈 | **Distância:** $textInputValue[quilômetros] quilômetros
🗺️ | **Mapa:** $textInputValue[mapa]}{author:$username:$authorAvatar}{color:00FF00}{footer:$username:$authorAvatar}{thumbnail:$authorAvatar}}]
$setGlobalUserVar[ultviagem;$textInputValue[destino]]
`
},{
  name: "camViagem",
  type: "interaction",
  prototype: "button", // Using "prototype" as this interaction belongs to a button.
  code: `
$interactionModal[Feito com amor por Kiko!🩷;camviagem;
  {actionRow:
    {textInput:📍 | Qual a cidade de início da viagem?:1:inicio:true:$getGlobalUserVar[ultviagem]:2:200}
  }
  {actionRow:
    {textInput:📌 | Qual a cidade de destino da viagem?:1:destino:true:São paulo:2:200}
  }
  {actionRow:
    {textInput:🗺️ | Qual o mapa que você está utilizando?:1:mapa:true:Br Brasil:1:50}
  }
  {actionRow:
    {textInput:📈 | Quantos quilômetros tem o trajeto?:1:quilômetros:true:155:1:10}
  }
  {actionRow:
    {textInput:🚛 | Qual carga e toneladas você esta levando?:1:carga:true:Frutas (15t):1:200}
  }
]`
},{
  name: "camviagem",
  type: "interaction",
  prototype: "modal", // Using "prototype" as this interaction belongs to a modal.
  code: `
$interactionReply[Muito obrigado! as informações foram passadas para o canal <#1269445517432193055>!;everyone;true]
$channelSendMessage[1269445517432193055;{newEmbed:
{title:🚛 | Informações da viagem | 🚛}{description:📍 | **Inicio da viagem:** $textInputValue[inicio]
📌 | **Destino da viagem:** $textInputValue[destino]
📈 | **Distância:** $numberSeparator[$textInputValue[quilômetros]] quilômetros
🚛 | **Carga:** $textInputValue[carga]
🗺️ | **Mapa:** $textInputValue[mapa]}{author:$username:$authorAvatar}{color:00FF00}{footer:$username:$authorAvatar}{thumbnail:$authorAvatar}}]
$setGlobalUserVar[ultviagem;$textInputValue[destino]]`
}]