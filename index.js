const Command = require('Command')
module.exports = function csc(dispatch) {
const c = Command(dispatch)
let czone = null;
let chanx = null;
dispatch.hook('S_LOAD_TOPO', 3, (event) => {   		
czone = event.zone
})
dispatch.hook('S_CURRENT_CHANNEL', 2, (event) => {   		
chanx = event.channel
})
c.add('ch', (chan) => {
c.message(`Moving to channel ${chan}`)
dispatch.toServer('C_SELECT_CHANNEL', 1, {
unk: 1,
zone: czone,
channel: parseInt(chan) - 1
})})
c.add('chx', () => {
c.message(`Moving to next channel`)
dispatch.toServer('C_SELECT_CHANNEL', 1, {
unk: 1,
zone: czone,
channel: chanx
})})}
