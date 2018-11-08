//
module.exports = function csc(mod) {
let czone = null;
let chanx = null;
mod.hook('S_LOAD_TOPO', 3, (event) => {   		
czone = event.zone
})
mod.hook('S_CURRENT_CHANNEL', 2, (event) => {   		
chanx = event.channel
})
mod.command.add('ch', (chan) => {
mod.command.message(`Moving to channel ${chan}`)
mod.send('C_SELECT_CHANNEL', 1, {
unk: 1,
zone: czone,
channel: parseInt(chan) - 1
})})
mod.command.add('chx', () => {
mod.command.message(`Moving to next channel`)
mod.send('C_SELECT_CHANNEL', 1, {
unk: 1,
zone: czone,
channel: chanx
})})}