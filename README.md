Channel Switch Command (Really creative name kappa)

Easily change channels via command
`!ch #`
Example: `!ch 2`

Command can be changed to what ever you like by changing the 'ch' in `c.add('ch', (chan) => {`

Requires Command: https://github.com/pinkipi/command

If the module isn't working make sure C_SELECT_CHANNEL is mapped correctly in your regions protocol list
NA(protocol.324670): C_SELECT_CHANNEL = 24735
(Not sure on other regions, don't have them installed currently after my last harddrive crashed)

If your sure you have it mapped correctly and it still isn't working, make sure you removed the "-master" from any of the required modules!