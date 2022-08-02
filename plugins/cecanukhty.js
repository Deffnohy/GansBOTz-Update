let fetch = require('node-fetch')
let zzz = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/ukhty.txt')
    .then(res => res.text())
    .then(txt => zzz = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = zzz[Math.floor(Math.random() * zzz.length)]
    if (!img) throw img
    conn.sendButtonImg(m.chat, img, 'Nih', ownername, 'Next', `.ukhty`, m) 
    }
handler.help = ['cecanukhty']
handler.tags = ['asupan']
handler.limit = 5
handler.command = /^(cecanukhty|ukhty)$/i

module.exports = handler

