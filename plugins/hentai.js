let fetch = require('node-fetch')

let handler  = async (m, { conn, command, args, usedPrefix, DevMode, isPrems }) => {
if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',wm2, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
  
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let ch = db.data.chats[m.chat].premnsfw
  //--------------------------
m.reply('_Tunggu Kids. . ._')
m.reply('1 Limit Telah Digunakan')
	let res = await fetch(`https://api.waifu.pics/nsfw/${command}`)
	if (!res.ok) throw await res.text()
	let json = await res.json()
	conn.sendButton(m.chat, `Random Image ${command}`, json.url, json.url, [['Next', usedPrefix + command]], m)
}
handler.help = handler.alias = ['blowjob', 'trap']
handler.tags = ['internet']
handler.command = /^(blowjob|trap)$/i
handler.premium = true

module.exports = handler
