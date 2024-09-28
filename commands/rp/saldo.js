module.exports = [{
  name: "saldo",
  aliases: ['atm', 'bal', 'balance', 'banco'],
  code: `
  $title[💰 | Saldo | 💰]
  $description[💵 | Saldo de: **"<@$mentioned[1;true]>"** 
  
  ### R$$numberSeparator[$getGlobalUserVar[money;$mentioned[1;true]]]]
  $thumbnail[$userAvatar[$mentioned[1;true]]]
  $color[$randomText[#fff546;#85ff4f]]
  $onlyIf[$getGlobalUserVar[conta;$mentioned[1;true]]!=x;❌ | você não tem uma conta! use \`m.cadastrar\` para criar uma conta!]
  $onlyIf[$getGlobalUserVar[cidade;$mentioned[1;true]]!=x;❌ | você não começou sua carreira ainda! use m.start]
  `
}]