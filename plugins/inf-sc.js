let handler = async m => m.reply(`
            𝖒𝖆𝖘𝖎𝖍 𝖕𝖗𝖔𝖘𝖊𝖘 𝖔𝖒
`.trim()) //

handler.customPrefix = /^(.sc|.script|sc|script)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
module.exports = handler
