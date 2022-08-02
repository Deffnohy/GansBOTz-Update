let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let arietube = '6289509960601@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: `
⳹⍣ 𝐎𝐩𝐞𝐧 𝐉𝐚𝐬𝐚 𝐒𝐞𝐰𝐚 𝐁𝐎𝐓 ⍣⳼
  
╔═══════════════༻
║☞ 〘༺ Sewa BOT ༻〙
╠❥1 BULAN = 10.000
╠❥2 BULAN = 15.000
╠❥Permanen = 20.000
╚═╦══════════════༻
   ║
   ╠═〘 *Kelebihan BOT* 〙
   ║☞ BOT ON 24 Jam
   ║☞ RUN Okteto/Heroku
   ║☞ Bisa Scan Ulang
   ║☞ Fitur Banyak
   ║☞ Tinggal Pake
╔═╩══════════════༻
╠═〘 *Keuntungan BOT* 〙
║☞ ANTILINK ( Auto Kick )
║☞ Welcome ( OTOMATIS )
║☞ Fitur NSFW (18+)
║☞ 100+ Fitur Lainnya
╚═══════════════╦༻
 Minat Hubungi Owner ║
╔═══════════════╩༻
║☞ wa.me/6289509960601?text=Assalamualaikum%20permisi%20kak%20mau%20sewabot
║
╚═══════════════༻

⳹⍣ 𝐎𝐩𝐞𝐧 𝐉𝐚𝐬𝐚 𝐉𝐚𝐝𝐢 𝐁𝐎𝐓 ⍣⳼

╔═══════════════༻
║ 〘༺ List Jadibot ༻〙
╠❥1 Bulan+Owner = 10.000
╠❥2 Bulan+Owner = 20.000
╠❥Permanen+Owner = 25.000
╚═══════╦═══════༻
            ╚══════╦༻
╔══════════════╩༻
╠═〘 *Fasilitas BOT* 〙
║☞ Tinggal Scan
║☞ On 24 jam
║☞ Bisa Scan Ulang
║☞ ON tanpa Internet
║☞ Fitur Bisa Di Check
║☞ Bukan BOT Wibusoft
╚═════╦══════════༻
         ║
╔═════╩════════════༻
╠═〘 *Keuntungan Jadi BOT* 〙
║☞ Bisa Sewa BOT
║☞ Setting BOT
║☞ No Owner Lu
║☞ No BOT Lu
║☞ Nama Owner Lu
║☞ Bebas
╚═══════════════╦༻
 Minat Hubungi Owner ║
╔═══════════════╩༻
║☞ wa.me/6289509960601?text=Assalamualaikum%20permisi%20kak%20mau%20Jadibot
║
╚═══════════════༻


*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6289509960601@s.whatsapp.net`
  },
  footerText: '',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
