module.exports = [{
    name: "rank",
    aliases: ["ranking", "top", "leaderboard"],
    $if: "old",
    code: `
    $argsCheck[1;❌ | Escreva qual rank vc quer ver entre: \`money\`, \`pontos\`]
    $if[$message[1]==pontos]
    $title[Rankig de pontos]
    $description[$globalUserLeaderBoard[pontos;desc;#{top} - {username} - {value};10;1;main]]
    $thumbnail[$userAvatar[$globalUserLeaderBoard[pontos;desc;{id};1;1;main]]]
    $elseif[$message[1]==money]
    $title[Rankig de dinheiro]
    $description[$globalUserLeaderBoard[money;desc;#{top} - {username} - {value};10;1;main]]
    $thumbnail[$userAvatar[$globalUserLeaderBoard[money;desc;{id};1;1;main]]]
    $endelseIf
    $else
    ❌ | Escreva qual rank vc quer ver entre: \`money\` ou \`pontos\`
    $endif
    `
}]