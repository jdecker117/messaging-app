const io = require('socket.io')(5004, {
    cors: {
        origins: ["*"]
    }
})

io.on('connection', socket => {
    //uses static id from client instead of new socket id upon every connection
    const id = socket.handshake.query.id
    socket.join(id)

    socket.on('send-message', ({ recipients, text }) => {
        recipients.forEach(recipient => {
            // removes recipient user from list of recipients
            const newRecipients = recipients.filter(r => r !== recipient)
            // adds sender to list of recipients
            newRecipients.push(id)
            socket.broadcast.to(recipient).emit('receive-message', {
                recipients: newRecipients, sender: id, text
            })
        })
    })
})