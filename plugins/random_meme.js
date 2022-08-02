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
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let url = global.API('xteam', '/randomimage/meme', {}, 'APIKEY')
    await conn.sendButtonImg(m.chat, url, '*MEME*', wm, 'NEXT', '.meme',fdoc, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^(meme)$/i

module.exports = handler