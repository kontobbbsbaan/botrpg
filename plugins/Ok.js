let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', m, { packname: "×͜× ▭▬▭▬▭▬ 👑 ▭▬▭▬▭▬ ×͜×\nﾒ 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 MODZ BOTZ\nﾒ 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 KIAN : 6283845409710\nﾒ 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 : MODZ BOTZ OFC\n⊟————————⊟", author: "" })
}

handler.customPrefix = /^(ok|sip)$/i
handler.command = new RegExp

module.exports = handler
