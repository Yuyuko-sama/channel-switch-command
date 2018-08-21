module.exports = function csc(d) {
let czone = null;
let chanx = null;
d.hook('S_LOAD_TOPO', 3, (event) => {   		
czone = event.zone
})
d.hook('S_CURRENT_CHANNEL', 2, (event) => {   		
chanx = event.channel
})
d.command.add("ch", {
x() {
d.command.message(`Moving to next channel`)
d.send('C_SELECT_CHANNEL', 1, {
unk: 1,
zone: czone,
channel: chanx
})
},
$default(chan) {
d.command.message(`Moving to channel ${chan}`)
d.send('C_SELECT_CHANNEL', 1, {
unk: 1,
zone: czone,
channel: parseInt(chan) - 1
})
}
})
}