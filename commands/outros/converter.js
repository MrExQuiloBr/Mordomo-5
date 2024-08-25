module.exports = [{
  name: "converter",
  code: `
  $title[🪙 | Conversor | 🪙]
  $description[### **🪙TikMoedas » 💵Reais**
  **🪙TikMoedas**
  \`\`\`T¢$numberSeparator[$message[1]]\`\`\`
  **💵Reais**
  \`\`\`Em pontos bônus: R$$numberSeparator[$round[$math[$message[1]*0.06]]] Em recarga: R$$numberSeparator[$round[$math[$message[1]*0.09]]]\`\`\`
  
  ### **Reais » TikMoedas**
  **💵Reais**
  \`\`\`R$$numberSeparator[$message[1]]\`\`\`
  **🪙TikMoedas**
  \`\`\`Em pontos bônus: T¢$numberSeparator[$round[$math[$message[1]/0.06]]] Em recarga: T¢$numberSeparator[$round[$math[$message[1]/0.09]]]\`\`\`]
  $color[#$randomText[a6ff9d;faff73]]
  $footer[Cada TikMoeda vale 0,6 Reais, ou 0,9 se você recarregar! | executado por $username]
  $addButton[1;Saiba Mais;link;https://www.tiktok.com/legal/page/global/coin-policy-eea/pt-BR;false]


  $cooldown[2s;❌ | você esta usando esse comando muito rapido!]
  $onlyIf[$isNumber[$message[1]]==true;❌ | você não digitou um número!]
  $argsCheck[1;❌ | você não digitou nenhum número!]
  `
}]