let fs = require('fs')          
let d = new Date(new Date + 3600000)
let locale = 'id'
let chalk = require('chalk')
global.owner = [
  ['6289509960601'],
  ['6289509960601'],
  ['6289509960601', 'Deffri', true]  
  
] 
global.noowner = '6289509960601'
global.ownername = [['𝐃𝐞𝐟𝐟𝐫𝐢 𝐆𝐚𝐧𝐬']]
global.namabot = [['𝑮𝒂𝒏𝒔𝑩𝑶𝑻𝒛']]
global.wm2 = [['Hoh']]
global.instalu = [['https://instagram.com/b4c00t.dtz']]
global.ytlu = [['https://youtube.com/channel/UCmEQy5B3GhmfNVSrHEzv-uA']]
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.log =  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=outline-shadow-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mods = []
global.prems = ['6289509960601'] 

//+$&#-$:$!#(#;#!$(_!#+$;_)_!&
global.fotonya1 = 'https://telegra.ph/file/3ee98976cb4f784eab41f.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/3ee98976cb4f784eab41f.jpg' 

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  bcil: 'https://75.119.137.248:21587',
  neoxr: 'https://api.neoxr.eu.org/',
  gimez: 'https://masgimenz.my.id/',
  melcanz: 'https://melcanz.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  restapi: 'https://x-restapi.herokuapp.com',
  alphabot: 'https://api-alphabot.herokuapp.com'
}
global.lolkey = 'YourApikey'
global.xkey = '524e9d1f64f72f79'
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '6aceac403a3d479b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': '0fWgL9ID',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'ZZBk7EBb',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA',
  'https://api-alphabot.herokuapp.com': 'N7axnIq3'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'Deffri Gans'
  var sticker_author = 'By GansBOTz'
} else {
  var sticker_name = '𝐃𝐞𝐟𝐟𝐫𝐢 𝐆𝐚𝐧𝐬'
  var sticker_author = 'by 𝑮𝒂𝒏𝒔𝑩𝑶𝑻𝒛'
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Sticker WM
global.packname = sticker_name
global.author = sticker_author
global.wm = 'Created by GansBOTz'

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
