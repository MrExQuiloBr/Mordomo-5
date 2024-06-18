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
    conta: "x",
    privado: false,
    pontos: 0,
    estado: "São Paulo",
    cidade: "São Paulo",
    page: "1",
    viagem: "false",
    viagemfeita: 0,
    money: 0,
    caminhão: "x",
});

const manutencao = "não"

if (manutencao === "não") {
    client.status({
        name: "Online para o Rotas Br 116!",
        type: "PLAYING",
        time: 12
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
  code: `$username Seja bem vindo(a)!`
});

client.loadCommands("./commands");