let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/nisa?apikey=QyF3VhyE', 'nisa.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['nisa']
handler.tags = ['asupan']

handler.command = /^(nisa)$/i

handler.limit = 1
module.exports = handler