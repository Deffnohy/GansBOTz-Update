let fetch = require('node-fetch')
const fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: namabot, 
   }
   }
   }
let handler = async (m, { conn, command }) => {
    let url = global.API('xteam', '/randomimage/meme', {}, 'APIKEY')
   conn.sendButtonImg(m.chat, url, 'Nih', ownername, 'Next', `.${command}`, fdoc, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['meme']
handler.tags = ['fun']
handler.command = /^(meme)$/i
handler.limit = true

module.exports = handler
