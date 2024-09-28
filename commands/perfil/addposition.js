module.exports = [{
  name: "addposition",
  $if: "old",
  code: `
  a posição desse usuário foi setada!
  $if[$message[1]==position]
  $setGlobalUserVar[posição;$message[2];$message[3]]
  $endif
  $if[$message[1]==emblema]
  $setGlobalUserVar[emblema;$message[2];$message[3]]
  $endif
  $onlyForIDs[1171963692984844401;340959314808406017;1141150093983101089;❌ | bro, you don't have permission to use this command!]
  `
}]