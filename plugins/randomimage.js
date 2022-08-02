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
let nyenye = `https://api-reysekha.herokuapp.com/api/wallpaper/${command}?apikey=APIKEY`
    conn.sendButtonImg(m.chat, nyenye, 'Nih', ownername, 'Next', `.${command}`, fdoc) 
}
handler.help = ['wallhp', 'kartun', 'katakata', 'hekel', 'anime', 'jeni']
handler.tags = ['internet']
handler.command = /^(wallhp|kartun|katakata|hekel|anime|jeni)$/i

module.exports = handler