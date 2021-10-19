let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tri [089514113395]
│ • Telkomsel [082286896563]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [082286896563]
│ • https://saweria.co/Nurutomo
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
