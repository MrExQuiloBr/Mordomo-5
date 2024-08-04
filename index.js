const { AoiClient } = require("aoi.js");
const { AoiCanvas } = require("aoi.canvas");

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

const canvas = new AoiCanvas(client);

client.variables({
    version: "1.0.65",
    conta: "x",
    privado: false,
    pontos: 0,
    estado: "São Paulo",
    cidade: "São Paulo",
    page: "1",
    viagem: "false",
    emviagem: "false",
    buttonpress: "false",
    money: 0,
    caminhão: "x",
    enGerada: "x",
    viagemType: "x",
    posição: "<@&1241357767831326780>",
    tempoviagem: "x",
    tentativas: "0",
    minigame: "0",
    ultviagem: "Rio de Janeiro"
});

const manutencao = "não"

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