const Command = require('Command')
module.exports = function csc(dispatch) {
const c = Command(dispatch)
let czone = null;
dispatch.hook('S_LOAD_TOPO', 1, (event) => {   		
czone = event.zone
})
c.add('ch', (chan) => {
c.message(`Moving to channel ${chan}`)
dispatch.toServer('C_SELECT_CHANNEL', 1, {
unk: 1,
zone: czone,
channel: parseInt(chan) - 1
})})}
