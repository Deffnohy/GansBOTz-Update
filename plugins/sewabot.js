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
β³Ήβ£ ππ©ππ§ πππ¬π πππ°π πππ β£β³Ό
  
ββββββββββββββββΰΌ»
ββ γΰΌΊ Sewa BOT ΰΌ»γ
β β₯1 BULAN = 10.000
β β₯2 BULAN = 15.000
β β₯Permanen = 20.000
βββ¦ββββββββββββββΰΌ»
   β
   β βγ *Kelebihan BOT* γ
   ββ BOT ON 24 Jam
   ββ RUN Okteto/Heroku
   ββ Bisa Scan Ulang
   ββ Fitur Banyak
   ββ Tinggal Pake
βββ©ββββββββββββββΰΌ»
β βγ *Keuntungan BOT* γ
ββ ANTILINK ( Auto Kick )
ββ Welcome ( OTOMATIS )
ββ Fitur NSFW (18+)
ββ 100+ Fitur Lainnya
βββββββββββββββββ¦ΰΌ»
 Minat Hubungi Owner β
βββββββββββββββββ©ΰΌ»
ββ wa.me/6289509960601?text=Assalamualaikum%20permisi%20kak%20mau%20sewabot
β
ββββββββββββββββΰΌ»

β³Ήβ£ ππ©ππ§ πππ¬π ππππ’ πππ β£β³Ό

ββββββββββββββββΰΌ»
β γΰΌΊ List Jadibot ΰΌ»γ
β β₯1 Bulan+Owner = 10.000
β β₯2 Bulan+Owner = 20.000
β β₯Permanen+Owner = 25.000
βββββββββ¦βββββββΰΌ»
            ββββββββ¦ΰΌ»
ββββββββββββββββ©ΰΌ»
β βγ *Fasilitas BOT* γ
ββ Tinggal Scan
ββ On 24 jam
ββ Bisa Scan Ulang
ββ ON tanpa Internet
ββ Fitur Bisa Di Check
ββ Bukan BOT Wibusoft
βββββββ¦ββββββββββΰΌ»
         β
βββββββ©ββββββββββββΰΌ»
β βγ *Keuntungan Jadi BOT* γ
ββ Bisa Sewa BOT
ββ Setting BOT
ββ No Owner Lu
ββ No BOT Lu
ββ Nama Owner Lu
ββ Bebas
βββββββββββββββββ¦ΰΌ»
 Minat Hubungi Owner β
βββββββββββββββββ©ΰΌ»
ββ wa.me/6289509960601?text=Assalamualaikum%20permisi%20kak%20mau%20Jadibot
β
ββββββββββββββββΰΌ»


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
