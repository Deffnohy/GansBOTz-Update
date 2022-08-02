
let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
	m.reply('_Sedang diproses..._')
	m.reply('1 Limit Telah Digunakan.')
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Nyaa', m)
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^neko$/i
handler.limit = true

module.exports = handler
