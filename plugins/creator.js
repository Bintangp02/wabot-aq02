function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '6285701399751', 'hdiiofficial', m)
  this.sendContact(m.chat, '18773291551', 'hdiiofficial', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
