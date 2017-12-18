const Command = require('Command')
const StateTracker = require('tera-state-tracker')
module.exports = function csc(dispatch) {
const c = Command(dispatch)
const s = StateTracker(dispatch)
c.add('ch', (chan) => {
c.message(`Moving to channel ${chan}`)
dispatch.toServer('C_SELECT_CHANNEL', 1, {
unk: 1,
zone: s.client.zone,
channel: parseInt(chan) - 1
})})}