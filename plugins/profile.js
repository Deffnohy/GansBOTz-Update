const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
const axios = require ("axios")
const fetch = require("node-fetch")
const com = `© ${global.ownername}`
const linkyt = `${ytlu}`
const linkig = `${instalu}`
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
	//let pp = await conn.updateProfilePicture(who)
	let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
    let { name, pasangan, limit, exp, money, bank, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users[who]
    let now = new Date() * 1
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
   // let buffer = await getBuffer(pp)
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let jodoh = `Berpacaran Dengan @${pasangan.split`@`[0]}`
    let kocok = `                   ${global.namabot}`
    let str = `╭───❑ 「 BALANCE 」 ❑────
├─ 📇 *Name*: ${username}
├─ 📓 ${about ? '*About*: ' + about : ''}
├─ 🆔 *Nomor* : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
├─ 👫 *Status*: ${pasangan ? jodoh : 'Jomblo' }
├─ 🎨 ${registered ? '*Age*: ' + age : ''}
├─ 🎫 *Limit*: ${limit}
├─ 💹 *Money*: ${money}
├─ 📍 *Role*: *${role}*
├─ 📊 *Level*: ${level}
├─ ✨ *Exp*: (${exp - min} / ${xp})
╰─❑ Premium: ${premium ? 'Yes' : 'No'}
`.trim()
     let url = `https://telegra.ph/file/12df1e25d364ede45a2f8.jpg`
let res = await fetch(url)
let buffer = await res.buffer()
let message = await prepareWAMessageMedia({ image: buffer }, { upload: conn.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: str.trim(),
                            hydratedFooterText: kocok,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: linkyt
                                }
                            }, {
                                urlButton: {
                                    displayText: 'INSTAGRAM',
                                    url: linkig
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'INVENTORY',
                                    id: '/inv'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                conn.relayMessage(m.chat, template.message, { messageId: template.key.id })
  }
handler.help = ['profile [@user]']
handler.tags = ['info']
handler.command = /^my|profile$/i
handler.limit = false
handler.register = true

module.exports = handler

