let handler = async (m, { conn }) => {
    let rest = 'https://api.zacros.my.id/randomimg/darkjokes'
    conn.sendButtonImg(m.chat, rest, 'Gelap😖', ownername, 'NEXT', '.darkjokes', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(darkjoke|darkjokes)$/i

module.exports = handler
