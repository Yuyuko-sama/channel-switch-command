Channel Switch Command (Really creative name kappa)

Easily change channels via command
`!ch #`
Example: `!ch 2`

Command can be changed to what ever you like by changing the 'ch' in `c.add('ch', (chan) => {`


Requires Command: https://github.com/pinkipi/command 
tera-state-tracker: https://github.com/kdiv/tera-state-tracker 
_tera-game-data(required by tera-state-tracker): https://github.com/kdiv/_tera-game-data 

I use tera-state-tracker for a more clean base script, I will release another version soon:tm: that doesn't require it, but its nice to have and a few other modules also use it

If the module isn't working make sure C_SELECT_CHANNEL is mapped correctly in your regions protocol list
NA(protocol.324670): C_SELECT_CHANNEL = 24735
(Not sure on other regions, don't have them installed currently after my last harddrive crashed)

If your sure you have it mapped correctly and it still isn't working, make sure you removed the "-master" from any of the required modules!
