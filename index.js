const { AoiClient } = require("aoi.js");

const client = new AoiClient({
    token: process.env.TOKEN, // Here goes the Token you copied earlier!
    prefix: "m.", // Here goes the prefix you want to use for your bot!
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers"],
    events: ["onMessage", "onInteractionCreate", "onJoin"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "CpnxtRlQBNuWDWXlJIgpEWVkhQEIuCya"
    }
});

client.variables({
    // rp  
    conta: "x",
    privado: false,
    pontos: 0,
    estado: "x",
    cidade: "x",
    page: "1",
    viagem: "false",
    emviagem: "false",
    buttonpress: "false",
    money: "0",
    caminhão: "x",
    enGerada: "x",
    viagemType: "x",
    tentativas: "0",
    minigame: "0",
    // system
    version: "1.2.0",
    ultviagem: "Rio de Janeiro",
    emblema: "Membro",
    posição: "1241357767831326780",
    tdcount: "0",
    tacount: "0",
    tscount: "0",
    trcount: "0",
    ownerticket: "0",
    // staffs
    birdafk: "false",
    birdreasson: "x",
    birdclass: "<@&1289271325583741009>"
});

const manutencao = "sim"

if (manutencao === "não") {
    client.status({
        name: "Online para o Rotas Br 116!",
        type: "PLAYING",
        time: 20
    });
    client.status({
        name: "Use m.help!",
        type: "PLAYING",
        time: 12
    });
    client.status({
        name: "Na versão $getVar[version]",
        type: "PLAYING",
        time: 18
    });
} else if (manutencao === "sim") {
    client.status({
        name: "Em Manutenção!",
        type: "PLAYING",
        status: "idle",
        time: 12
    });
}


client.joinCommand({ // Exclude "on" of the event's name. For example, "onTypingStart" becomes "typingStartCommand"
  channel: "1241346112124616744",
  code: `**$username** entrou no server! Seja bem vindo(a)!`
});


client.loadCommands("./commands");