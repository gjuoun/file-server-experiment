import net from 'net'

const server = net.createServer((socket) => {
  console.log('its running')
  
  socket.write('Hello')
  socket.on("data", (data) => {
    console.log(data.toString())
  })
})

server.listen(8080)

