module.exports = [
    {
        name: "help",
        aliases: ["helpcmd", "helpme"],
        code: `
        $title[Help Command!$thumbnail[$userAvatar[$authorID]]]
        $color[$userRoleColor[$authorID;$guildID]]
        $description[Hi <@$authorID>! Bot ini sedang tahap pengembangan ya silahkan kembali lain waktu]
        $footer[Bot by ANDY2306!]`,
    },
]