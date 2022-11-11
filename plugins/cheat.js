/*let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes Cheat Money Exp Limit Level !*`, m)
        global.db.data.users[m.sender].money = 99999999999999999999999
        global.db.data.users[m.sender].exp = 99999999999999999999999
        global.db.data.users[m.sender].limit = 99999999999999999999999
        global.db.data.users[m.sender].level = 99999999999999999999999
        
}
handler.help = ['cheat']
handler.tags = ['premium']
handler.command = /^(cheat)$/i
handler.owner = true
handler.mods = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler*/

let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes Cheat Money Exp Limit Level !*`, m)
        global.db.data.users[m.sender].money = 99999999999999999999999
        global.db.data.users[m.sender].exp = 99999999999999999999999
        global.db.data.users[m.sender].limit = 99999999999999999999999
        global.db.data.users[m.sender].level = 99999999999999999999999
        
}
handler.help = ['cheat']
handler.tags = ['game']
handler.command = /^(cheat)$/i
handler.premium = true
handler.mods = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler

